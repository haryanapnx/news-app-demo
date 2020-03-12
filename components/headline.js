import React from "react";
import { Carousel } from "react-bootstrap";
import { isEmpty } from "../utils/general";
import Skeleton from "react-loading-skeleton";

const Headline = ({ data, loading }) => {
    const addDefaultSrc = e => {
      e.target.src = "https://via.placeholder.com/150";
    };
  return (
    <>
      <Carousel fade className="shadow">
        {loading && (
          <Carousel.Item sytle={{ textAlign: "center" }}>
            <Skeleton width={"100%"} height={400} />
          </Carousel.Item>
        )}
        {!isEmpty(data) &&
          data.map((item, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={item.urlToImage}
                alt="First slide"
                style={{ maxHeight: 400 }}
                onError={addDefaultSrc}
              />
              <Carousel.Caption>
                <h3>{item.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
};
export default Headline;
