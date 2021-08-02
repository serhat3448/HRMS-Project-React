import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Header, Icon, Button, Pagination } from "semantic-ui-react";
import JobseekerService from "../../../services/jobseekerService";

export default function JobseekerList() {
  const [jobseekers, setJobseekers] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobseekerService();
    
    jobSeekerService
      .getJobseekers()
      .then((result) => setJobseekers(result.data.data));
  }, []);


  return (
    <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>İş Arayanlar</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İsim</Table.HeaderCell>
            <Table.HeaderCell>Soyisim</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Detay</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobseekers.map((jobseeker) => (
            <Table.Row key = {jobseeker.id}>
              <Table.Cell>{jobseeker.firstName}</Table.Cell>
              <Table.Cell>{jobseeker.lastName}</Table.Cell>
              <Table.Cell>{jobseeker.email}</Table.Cell>
              <Table.Cell>
                <Button basic color="green" as={Link} to={`/jobseekerDetails/${jobseeker.id}`}>Detaya Git</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      
    </div>
    
  );
}