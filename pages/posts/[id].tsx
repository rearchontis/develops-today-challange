import Layout from "../../components/layout";
import { GetServerSideProps } from "next";
import axios from "axios";
import { BLOG_API } from "../index";
import React from "react";
import PropTypes from "prop-types";
import { PostProps } from "../../components/componentInterfaces";

interface GetPostInterface {
  className: string;
  post: PostProps;
}

const PostById: React.FC<GetPostInterface> = ({ post }) => {
  const { title, body } = post;
  return (
    <Layout>
      <h1>Title: {title}</h1>
      <div>
        <p>{body || "none"}</p>
      </div>
      <style jsx>{`
        h1 {
          color: #242526;
          background: #efeffe;
          padding: 1rem;
          min-width: 390px;
          width: 50vw;
          border-radius: 5px;
        }
        div {
          color: #242526;
          min-width: 390px;
          width: 50vw;
          padding: 1rem;
          background: #efeffe;
          border-radius: 5px;
          margin-bottom: 10px;
        }
        p {
          font-size: 18px;
          margin: 0;
        }
      `}</style>
    </Layout>
  );
};

PostById.propTypes = {
  post: PropTypes.exact({
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number,
  }),
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(BLOG_API);
  const posts = Object.values(response.data);
  const index = posts
    .map((post: PostProps) => post.id)
    .indexOf(+context.query.id);
  const post = posts[index];
  return {
    props: {
      post,
    },
  };
};

export default PostById;
