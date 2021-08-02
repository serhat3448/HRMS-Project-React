import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import * as Yup from "yup";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import { useHistory } from "react-router-dom";
import JobAdvertService from "../../services/jobAdvertService";
import JobPositionService from "../../services/jobPositionService";
import CityService from "../../services/cityService";
import WorkPlaceService from "../../services/workPlaceService";
import WorkTimeService from "../../services/workTimeService";
import { useFormik } from "formik";
import { toast } from "react-toastify";

export default function JobAdvertCreate(){

    const {authItem} = useSelector(state =>state.auth)

    let jobAdvertService = new JobAdvertService();

    const JobAdvertAddSchema = Yup.object().shape({
        deadline: Yup.date().nullable().required("Bu alanın doldurulması zorunludur"),
        description: Yup.string().required("Bu alanın doldurulması zorunludur"),
        jobPositionId: Yup.string().required("Bu alanın doldurulması zorunludur"),
        workTimeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
        workPlaceId: Yup.string().required("Bu alanın doldurulması zorunludur"),
        openPositionCount: Yup.string().required("Posizyon sayısı zorunludur").min(1,"Posizyon sayısı 1 den küçük olamaz"),
        cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
        salaryMax: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur"),
        salaryMin: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur")
    });

    const history = useHistory();

  const formik = useFormik({
    initialValues: {
      description: "",
      jobPositionId: "",
      workTimeId: "",
      workPlaceId: "",
      openPositionCount: "",
      cityId: "",
      salaryMin: "",
      salaryMax: "",
      deadline: "",
    },

    validationSchema: JobAdvertAddSchema,
    onSubmit: (values) => {
      values.employerId = authItem[0].user.id;
      jobAdvertService.add(values).then((result) => {
        toast.success(result.data.message)
        console.log("eklendi mi?")
      }).catch((result) => {
        console.log("hata oluştu")
        toast.error(result.response.data.message)

      })
      history.push("/jobAvertList");
    },

    });

    const [workTimes, setWorkTimes] = useState([]);
    const [workPlaces, setWorkPlaces] = useState([]);
    const [cities, setCities] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);

    useEffect(() => {
        let workTimeService = new WorkTimeService();
        let workPlaceService = new WorkPlaceService();
        let cityService = new CityService();
        let jobPositionService = new JobPositionService();

        workTimeService.getWorkTimes().then((result) => setWorkTimes(result.data.data));
        workPlaceService.getWorkPlaces().then((result) => setWorkPlaces(result.data.data));
        cityService.getCities().then((result) => setCities(result.data.data));
        jobPositionService.getJobPositions().then((result) => setJobPositions(result.data.data));
    }, []);

    const workTimeOption = workTimes.map((workTime, index) => ({
        key: index,
        text: workTime.name,
        value: workTime.id,
    }));
    const workPlaceOption = workPlaces.map((workPlace, index) => ({
        key: index,
        text: workPlace.name,
        value: workPlace.id,
    }));
    const cityOption = cities.map((city, index) => ({
        key: index,
        text: city.name,
        value: city.id,
    }));
    const jobPositionOption = jobPositions.map((jobPosition, index) => ({
        key: index,
        text: jobPosition.jobTitle,
        value: jobPosition.id,
    }));

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    }




    return(
      <div>
      {authItem[0].user.userType !==2 &&
        <div className="ui negative message">
          <div className="header">
            Bu sayfayı görüntülemeye yetkiniz yok
          </div>
          <p>Giriş yapmayı yada bir iş veren hesabı oluşturmayı deneyebilirsiniz</p>
        </div>
      }
      {authItem[0].user.userType ===2 && 
      <Card fluid>
      <Card.Content header='İş ilanı Ekle' />
      <Card.Content>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Field style={{marginBottom: "1rem"}}>
          <label>İş Posisyonu</label>
        <Dropdown
          clearable
          item
          placeholder="İş pozisyonu"
          search
          selection
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "jobPositionId")
          }
          onBlur={formik.onBlur}
          id="jobPositionId"
          value={formik.values.jobPositionId}
          options={jobPositionOption}
          />
          {formik.errors.jobPositionId && formik.touched.jobPositionId &&(
            <div className={"ui pointing red basic label"}>
              {formik.errors.jobPositionId}
            </div>
          )}
          </Form.Field>
          <Form.Field>
          <label>Şehir</label>
            <Dropdown
              clearable
              item
              placeholder="Şehir"
              search
              selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "cityId")
              }
              onBlur={formik.onBlur}
              id="cityId"
              value={formik.values.cityId}
              options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                {formik.errors.cityId}
              </div>
              )}
          </Form.Field>
          <Form.Field>
          <label>Çalışma yeri</label>
          <Dropdown
                  clearable
                  item
                  placeholder="Çalışma yeri"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workPlaceId")
                  }
                  onBlur={formik.onBlur}
                  id="workPlaceId"
                  value={formik.values.workPlaceId}
                  options={workPlaceOption}
                />
                {formik.errors.workPlaceId && formik.touched.workPlaceId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.workPlaceId}
                  </div>
                )}
          </Form.Field>
          <Form.Field>
          <label>Çalışma Süresi</label>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Süresi"
                  search
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workTimeId")
                  }
                  onBlur={formik.onBlur}
                  id="workTimeId"
                  value={formik.values.workTimeId}
                  options={workTimeOption}
                />
                {formik.errors.workTimeId && formik.touched.workTimeId && (
                  <div className={"ui pointing red basic label"}>{formik.errors.workTimeId}</div>
                )}
              </Form.Field>
              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
              <label style={{fontWeight: "bold"}}>Maaş aralığı MİNİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MİNİMUM"
                  value={formik.values.minSalary}
                  name="salaryMin"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.salaryMin && formik.touched.salaryMin && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.salaryMin}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Maaş aralığı MAKSİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MAKSİMUM"
                  value={formik.values.salaryMax}
                  name="salaryMax"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.salaryMax && formik.touched.salaryMax && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.salaryMax}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
              <Grid stackable>
              <Grid.Column width={8}>
              <label style={{fontWeight: "bold"}}>Açık Posisyon sayısı</label>
                <Input
                  style={{ width: "100%" }}
                  id="openPositions"
                  name="openPositionCount"
                  error={Boolean(formik.errors.openPositions)}
                  onChange={formik.handleChange}
                  value={formik.values.openPositions}
                  onBlur={formik.handleBlur}
                  type="number"
                  placeholder="Açık Posisyon sayısı"
                />
                {formik.errors.openPositionCount && formik.touched.openPositionCount && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.openPositionCount}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Son başvuru tarihi</label>
                <Input
                  style={{ width: "100%" }}
                  type="date"
                  error={Boolean(formik.errors.deadline)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "deadline")
                  }
                  value={formik.values.deadline}
                  onBlur={formik.handleBlur}
                  name="deadline"
                  placeholder="Son başvuru tarihi"
                />
                {formik.errors.lastDate && formik.touched.deadline && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.deadline}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
              <label>Açıklama</label>
                <TextArea
                  placeholder="Açıklama"
                  style={{ minHeight: 100 }}
                  error={Boolean(formik.errors.description).toString()}
                  value={formik.values.description}
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.description && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.description}
                  </div>
                )}
              </Form.Field>
              <Button
                content="Ekle"
                labelPosition="right"
                icon="add"
                positive
                type="submit"
                style={{ marginLeft: "20px" }}
              />
      </Form>
      </Card.Content>
      </Card>}
      
    </div>
    )
    
}