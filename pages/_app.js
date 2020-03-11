import React from "react";
import { Provider } from "react-redux";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../stores";
import Router from "next/router";
import NProgress from "nprogress";

NProgress.configure({ showSpinner: true });
Router.events.on("routeChangeStart", url => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", url => {
  NProgress.done();
  window.scrollTo(0, 0);
});
Router.events.on("routeChangeError", () => NProgress.done());

export default withRedux(initStore)(
  class News extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      );
    }
  }
);
