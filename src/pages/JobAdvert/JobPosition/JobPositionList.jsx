import React from "react";
import { useState, useEffect } from "react";
import { Table, Header, Icon } from "semantic-ui-react";
import JobPositionService from "../../../services/jobPositionService";

export default function JobPositionList() {
  const [positions, setPositions] = useState([]);
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setPositions(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>İŞ POZİSYONLARI</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>BAŞLIK</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {positions.map((position) => (
            <Table.Row key={position.id}>
              <Table.Cell>{position.jobTitle}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}