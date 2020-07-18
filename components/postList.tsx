import Post from "./post";

export default function PostList({ posts }) {
  return (
    <>
      { posts.map((post, index) => {
        const { title, text, id } = post;
        return (
          <Post
            key={index}
            title={title}
            text={text}
            id={id}
          />
        )
      }) }
    </>
  )
}


