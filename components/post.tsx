import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
import { PostProps } from "./componentInterfaces";

const Post: React.FC<PostProps> = ({ title, text, id }) => {
  return (
    <>
      <div>
        <h2>
          <Link href={`/posts/[id]`} as={`/posts/${id}`}>
            <a>Title: {title}</a>
          </Link>
          <span>{new Date(+id).toLocaleString()}</span>
        </h2>
        <p>{text || "none"}</p>
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
        }
        a:hover {
          box-shadow: 0 0 5px darkblue, 0 0 10px darkblue;
        }
        p {
          font-size: 18px;
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
  text: PropTypes.string,
  id: PropTypes.string,
};

export default Post;
