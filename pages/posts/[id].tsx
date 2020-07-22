import Layout from "../../components/layout";
import { GetServerSideProps } from "next";
import axios from "axios";
import { db } from "../index";
import React from "react";
import { PostProps } from "../../components/componentInterfaces";

const PostById: React.FC<PostProps> = ({ ...post }) => {
  const { title, text } = post;
  return (
    <Layout>
      <h1>Title: {title}</h1>
      <div>
        <p>{text || "none"}</p>
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

// PostById.propTypes = {
//   post: PropTypes.objectOf(PropTypes.string)
// }

// interface Post {
//   id: string;
//   text: string;
//   date: string;
// }

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axios.get(db + ".json");
  const posts = Object.values(response.data);
  const index = posts
    .map((post: PostProps) => post.id)
    .indexOf(context.query.id.toString());
  const post = posts[index];
  return {
    props: {
      post,
    },
  };
};

export default PostById;
