import Head from "next/head";
import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
import { LayoutProps } from "./componentInterfaces";

const Layout: React.FC<LayoutProps> = ({ children, title = "Next App" }) => {
  return (
    <>
      <Head>
        <title>{title} | DevelopsToday</title>
        <meta name="keywords" content="next, nextjs, ssr, typescript, react" />
        <meta
          name="description"
          content="this app is my challenge for DevelopsToday to show my skills in nextjs, typescript, redux, react and etc."
        />
      </Head>
      <nav>
        <Link href={"/"}>
          <a>Latest Posts</a>
        </Link>
        <Link href={"/posts/new"}>
          <a>Create new post</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 60px;
          left: 0;
          right: 0;
          top: 0;
          background: #242526;
        }
        nav a {
          color: #ffffff;
          text-decoration: none;
          position: relative;
          height: 100%;
          width: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: 0.1s all ease-in-out;
        }
        nav a:hover {
          background: #efeffe;
          color: #242526;
        }
        main {
          margin: 60px;
          padding: 0 1rem 0 1rem;
          display: flex;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.array,
  title: PropTypes.string,
};

export default Layout;
