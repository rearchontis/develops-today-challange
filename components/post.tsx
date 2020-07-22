import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
import { PostProps } from "./componentInterfaces";

const Post: React.FC<PostProps> = ({ title, body, id }) => {
  return (
    <>
      <div>
        <h2>
          <Link href={`/posts/[id]`} as={`/posts/${id}`}>
            <a>Title: {title}</a>
          </Link>
          <span>{id}</span>
        </h2>
        <p>{body || "none"}</p>
      </div>
      <style jsx>{`
        div {
          color: #242526;
          min-width: 300px;
          width: 50vw;
          padding: 1rem;
          background: #efeffe;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        h2 {
          margin: 0;
          display: flex;
          justify-content: space-between;
          font-size: 20px;
        }
        a {
          text-decoration: none;
          position: relative;
          padding: 5px;
          overflow: hidden;
          color: darkblue;
          border-radius: 3px;
          border: 1px solid transparent;
        }
        a:hover {
          border: 1px solid #242526;
        }
        p {
          font-size: 18px;
          padding: 5px;
        }
        span {
          font-size: 12px;
        }
      `}</style>
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
};

export default Post;
