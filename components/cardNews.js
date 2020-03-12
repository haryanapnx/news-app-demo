import React from "react";
import { Card } from "react-bootstrap";
import dayjs from "dayjs";
import "dayjs/locale/id";
dayjs.locale("id");

const CardNews = ({ data, description }) => {
  const addDefaultSrc = e => {
    e.target.src = "https://via.placeholder.com/150";
  };
  return (
    <>
      <Card>
        <Card>
          <img
            onError={addDefaultSrc}
            className="card-img-top"
            src={data.urlToImage}
          />
          <Card.Body>
            <Card.Title>{data.title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{data.publishedAt}</small>
          </Card.Footer>
        </Card>
      </Card>
    </>
  );
};
export default CardNews;
