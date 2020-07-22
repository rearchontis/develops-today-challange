import Post from "./post";
import React from "react";
import PropTypes from "prop-types";
import { PostsProps } from "./componentInterfaces";

const PostList: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      {posts
        .sort((a, b) => (a.id - b.id >= 0 ? -1 : 1))
        .map((post, index) => {
          const { title, body, id } = post;
          return <Post key={index} title={title} body={body} id={+id} />;
        })}
    </>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
};

export default PostList;
