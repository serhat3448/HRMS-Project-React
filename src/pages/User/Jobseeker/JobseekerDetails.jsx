import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Container, Icon, Label, Rating, Table } from "semantic-ui-react";
import ExperienceService from "../../../services/experienceService";
import ForeignLanguageService from "../../../services/foreignLanguageService";
import LinkService from "../../../services/linkService";
import ProgrammingSkillService from "../../../services/programmingSkillService";
import SchoolService from "../../../services/schoolService";

export default function JobseekerDetails() {
  const [schools, setSchools] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [programmingSkills, setProgrammingSkills] = useState([]);
  const [links, setLinks] = useState([]);

  
  let id = useParams();
    console.log(id)

  useEffect(() => {
    let schoolService = new SchoolService();
    schoolService
      .getAllByJobseekerId(id)
      .then((result) => setSchools(result.data.data));
  }, [id]);

  useEffect(() => {
    let experienceService = new ExperienceService();
    experienceService
      .getAllByJobseekerId(id)
      .then((result) => setExperiences(result.data.data));
  }, [id]);

  useEffect(() => {
    let foreignLanguageService = new ForeignLanguageService();
    foreignLanguageService
      .getAllByJobseekerId(id)
      .then((result) => setLanguages(result.data.data));
  }, [id]);

  useEffect(() => {
    let programmingSkillService = new ProgrammingSkillService();
    programmingSkillService
      .getAllByJobseekerId(id)
      .then((result) => setProgrammingSkills(result.data.data));
  }, [id]);

  useEffect(() => {
    let linkService = new LinkService();
    linkService
      .getAllByJobseekerId(id)
      .then((result) => setLinks(result.data.data));
  }, [id]);

  return (
    <div>
      <Container>
        <Label size='big' style={{marginTop:"2em"}}>OKUL BİLGİLERİ</Label>
        <Table celled compact definition>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Okul Adı</Table.HeaderCell>
              <Table.HeaderCell>Bölümü</Table.HeaderCell>
              <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
              <Table.HeaderCell>Bitiş tarihi</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {schools.map((school) => (
              <Table.Row key={school.id}>
                <Table.Cell collapsing></Table.Cell>
                <Table.Cell>{school.schoolName}</Table.Cell>
                <Table.Cell>{school.department}</Table.Cell>
                <Table.Cell>{school.startAt}</Table.Cell>
                <Table.Cell>{school.endAt}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan="4">
                <Button
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                >
                  <Icon name="user" /> Düzenle
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>

      <Container>
      <Label size='big' style={{marginTop:"0.8em"}}>TECRÜBE BİLGİLERİ</Label>
        <Table celled compact definition>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Pozisyon</Table.HeaderCell>
              <Table.HeaderCell>Çalışma Tipi</Table.HeaderCell>
              <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
              <Table.HeaderCell>Bitiş tarihi</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {experiences.map((experience) => (
              <Table.Row key={experience.id}>
                <Table.Cell collapsing></Table.Cell>
                <Table.Cell>{experience.position}</Table.Cell>
                <Table.Cell>{experience.workingPlace}</Table.Cell>
                <Table.Cell>{experience.startAt}</Table.Cell>
                <Table.Cell>{experience.endAt}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan="4">
                <Button
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                >
                  <Icon name="user" /> Düzenle
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>

      <Container>
      <Label size='big' style={{marginTop:"0.8em"}}>YABANCI DİL BİLGİSİ</Label>
        <Table celled compact definition>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Dil</Table.HeaderCell>
              <Table.HeaderCell>Seviye</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {languages.map((language) => (
              <Table.Row key={language.id}>
                <Table.Cell collapsing></Table.Cell>
                <Table.Cell>{language.language}</Table.Cell>
                <Table.Cell><Rating maxRating={5} defaultRating={0} icon='star' size='large' /></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan="4">
                <Button
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                >
                  <Icon name="user" /> Düzenle
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>

      <Container>
      <Label size='big' style={{marginTop:"0.8em"}}>PROGRAMLAMA BİLGİSİ</Label>
        <Table celled compact definition>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Yetenek</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {programmingSkills.map((programmingSkill) => (
              <Table.Row key={programmingSkill.id}>
                <Table.Cell collapsing></Table.Cell>
                <Table.Cell>{programmingSkill.skillName}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan="4">
                <Button
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                >
                  <Icon name="user" /> Düzenle
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>

      <Container>
      <Label size='big' style={{marginTop:"0.8em"}}>LİNKLER</Label>
        <Table celled compact definition>
          <Table.Header fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Link</Table.HeaderCell>
              <Table.HeaderCell>Url</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {links.map((link) => (
              <Table.Row key={link.id}>
                <Table.Cell collapsing></Table.Cell>
                <Table.Cell>{link.name}</Table.Cell>
                <Table.Cell>{link.url}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer fullWidth>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan="4">
                <Button
                  floated="right"
                  icon
                  labelPosition="left"
                  primary
                  size="small"
                >
                  <Icon name="user" /> Düzenle
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
    </div>
  );
}
