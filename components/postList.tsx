import Post from "./post";
import React from "react";
import PropTypes from "prop-types";
import { PostsProps } from "./componentInterfaces";

const PostList: React.FC<PostsProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => {
        const { title, text, id } = post;
        return <Post key={index} title={title} text={text} id={id} />;
      })}
    </>
  );
};

PostList.propTypes = {
  posts: PropTypes.array,
};

export default PostList;
