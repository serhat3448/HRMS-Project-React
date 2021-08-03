import React, { useEffect, useState } from "react";
import { Header, Icon, Table, Button, Grid, Card } from "semantic-ui-react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import JobAdvertService from "../../services/jobAdvertService";

export default function JobAdvertDetail() {
  let { id } = useParams();

  const {authItem} = useSelector(state => state.auth)

  const [jobAdvert, setJobAdvert] = useState({});


  useEffect(() => {
    let jobAdvertService = new JobAdvertService();


    jobAdvertService.getById(id).then((result) => setJobAdvert(result.data.data));

  }, [id,authItem]);


  return (
    
    <div>
      {authItem[0].loggedIn ===false &&
        <div className="ui negative message">
          <div className="header">
            Detayları görüntülebilmek için giriş yapmanız gerekmektedir.
          </div>
          <p>Giriş yapmayı ya da bir iş bir hesap oluşturmayı deneyebilirsiniz</p>
        </div>
      }
      
      {authItem[0].loggedIn ===true  &&
      <div>
      <Card fluid color={"black"}>
        <Card.Content header="Açıklama" />
        <Card.Content>
            {jobAdvert.description}
        </Card.Content>
      </Card>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={6}>
            <Table celled color={"black"} stackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>İş veren</Table.HeaderCell>
                  <Table.HeaderCell>Bilgiler</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="building" />
                        Şirket Adı
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{jobAdvert.employer?.companyName}</Table.Cell>
                </Table.Row>

                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="mail" />
                        Email
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{jobAdvert.employer?.email}</Table.Cell>
                </Table.Row>

                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="phone" />
                        Telefon
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{jobAdvert.employer?.phoneNumber}</Table.Cell>
                </Table.Row>

                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="world" />
                        Web Sitesi
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{jobAdvert.employer?.website}</Table.Cell>
                </Table.Row>

                <Table.Row textAlign={"left"}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Icon name="list ul" />
                        Şirketin Diğer İlanları
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>
                    <Button animated as={Link} to={`/jobAdvertsOfCompany/${jobAdvert.employer?.id}`}>
                      <Button.Content visible>İlanları Gör</Button.Content>
                      <Button.Content hidden>
                        <Icon name="arrow right" />
                      </Button.Content>
                    </Button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
                
            
          </Grid.Column>
          <Grid.Column width={10}>
            <Table celled fixed singleLine color={"black"}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>İş İlanı</Table.HeaderCell>
                  <Table.HeaderCell>Detaylar</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>İş Pozisyonu</Table.Cell>
                  <Table.Cell>{jobAdvert.jobPosition?.jobTitle}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Şehir</Table.Cell>
                  <Table.Cell>{jobAdvert.city?.name}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Çalışma Yeri</Table.Cell>
                  <Table.Cell>{jobAdvert.workPlace?.name}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Çalışma Zamanı</Table.Cell>
                  <Table.Cell>{jobAdvert.workTime?.name}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Minimum Maaş</Table.Cell>
                  <Table.Cell>{jobAdvert.salaryMin}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Maksimum Maaş</Table.Cell>
                  <Table.Cell>{jobAdvert.salaryMax}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Açık Pozisyonlar</Table.Cell>
                  <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Yayınlanma Tarihi</Table.Cell>
                  <Table.Cell>{jobAdvert.publishedAt}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Son Başvuru Tarihi</Table.Cell>
                  <Table.Cell>{jobAdvert.deadline}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>}

      
    </div>
  );
}
