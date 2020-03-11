import React, { useEffect } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getNewsLates } from "../stores/news_latest/action";
import CardNews from "./cardNews";
import { isEmpty } from "../utils/general";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector(({ newsLatest }) => newsLatest);

  useEffect(() => {
    getApi();
  }, [dispatch]);
  const getApi = async () => {
    await dispatch(getNewsLates({ country: "us" }));
  };

  return (
    <>
      <div>{loading && "loading ...."}</div>
          {!isEmpty(data) && data.map((item,i)=>(
           <CardNews key={i} data={item} />
          ))
     }
    </>
  );
};
export default Home;
