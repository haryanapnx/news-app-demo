import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/header";
import Home from "../components/home";
import Headline from "../components/headline";
import { useDispatch, useSelector } from "react-redux";
import { getNewsLates } from "../stores/news_latest/action";
import { getHeadline } from "../stores/headline/action";
import { withRouter } from "next/router";

const Category = ({ router }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { data, loading } = useSelector(({ newsLatest }) => newsLatest);
  const { headline, loading_headline } = useSelector(
    ({ headline }) => headline
  );

  useEffect(() => {
    getApi();
    setSearch('')
  }, [router]);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const getApi = async (e = {}) => {
    if (search === "") {
      await dispatch(
        getHeadline({ category: router.query.slug, country: "id", pageSize: 5 })
      );
    } else {
      e.preventDefault();
    }
    await dispatch(
      getNewsLates({ category: router.query.slug, country: "id", q: search })
    );
  };
  return (
    <>
      <Header
        search={search}
        handleSearch={handleSearch}
        submit={getApi}
        isActive={""}
      />
      <Headline data={headline} loading={loading_headline} />
      <Home data={data} loading={loading} />
      <div className="container">
        <Head>
          <title>Mark News</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <footer>Powered by Mark News</footer>
      </div>
    </>
  );
};
export default withRouter(Category);
