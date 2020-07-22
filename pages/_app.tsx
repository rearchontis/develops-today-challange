import { AppProps } from "next/app";
import React from "react";
import PropTypes from "prop-types";

const _App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          font-family: "Roboto", sans-serif;
          margin: 0;
        }
      `}</style>
    </>
  );
};

_App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.object,
};

export default _App;
