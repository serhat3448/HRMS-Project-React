import React, { useState, useEffect } from "react";
import { Table, Icon, Card, Button, Pagination } from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";
import { Link } from "react-router-dom";

export default function JobAdvertList() {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdverts()
      .then((result) => setAdverts(result.data.data));
  }, []);

  return (
    <div>
      <Card fluid color={"black"}>
        <Card.Content>
          <Table color={"black"}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                <Table.HeaderCell>Şehir</Table.HeaderCell>
                <Table.HeaderCell>Çalışma Yeri</Table.HeaderCell>
                <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
                <Table.HeaderCell>Detaylar</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>

              {adverts.map((jobAdvert) => (
                <Table.Row key={jobAdvert.id}>   
                  <Table.Cell>{jobAdvert.jobPosition?.jobTitle}</Table.Cell>              
                  <Table.Cell>{jobAdvert.city?.name}</Table.Cell>
                  <Table.Cell>{jobAdvert.workPlace?.name}</Table.Cell>
                  <Table.Cell>{jobAdvert.workTime?.name}</Table.Cell>
                  <Table.Cell>
                    <Button animated as={Link} to={`/jobAdvertDetails/${jobAdvert.id}`}>
                      <Button.Content visible>Detayları Gör</Button.Content>
                      <Button.Content hidden>
                        <Icon name="arrow right" />
                      </Button.Content>
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Card.Content>
        <Card.Content extra>
          <Icon name="list" />
          {adverts?.length} Adet İş ilanı mevcut
        </Card.Content>
      </Card>
      <Pagination
    boundaryRange={0}
    defaultActivePage={1}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={10}
  />
    </div>
  );
}
