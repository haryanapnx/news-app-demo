import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const CardNews = ({ data }) => {
  return (
    <>
      <Card>
        <Row className="show-grid">
          <Col xs={6} md={4}>
            <Card.Img variant="top" src={data.urlToImage} />
          </Col>
          <Col xs={12} md={8}>
            <Card.Body>
              <Card.Text>{data.title}</Card.Text>
              <Card.Text>{data.description.substr(1, 50)} ...</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};
export default CardNews;
