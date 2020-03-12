import React from "react";
import Skeleton from "react-loading-skeleton";
import { Col, Card } from "react-bootstrap";

const Loader = () => {
  const numb = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {numb.map(item => (
        <Col key={item} xs={6} md={4} className="mb-3 mt-3">
          <Card>
            <Card>
              <Skeleton width={'100%'} height={200} />
              <Card.Body>
                <Skeleton count={5} />
              </Card.Body>
              <Card.Footer>
                <Skeleton count={1} />
              </Card.Footer>
            </Card>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default Loader;
