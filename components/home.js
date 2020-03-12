import React, { useEffect } from "react";
import { Container, Row, Col, FormControl, Button } from "react-bootstrap";
import CardNews from "./cardNews";
import { isEmpty } from "../utils/general";
import Loader from "../components/loader";

const Home = ({ data, loading }) => {
  return (
    <>
      <Container>
        <Row>
          {loading && <Loader />}
          {!isEmpty(data) &&
            data.map((item, i) => (
              <Col key={i} xs={12} md={4} className="mb-3 mt-3">
                <CardNews data={item} description={item.description} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};
export default Home;
