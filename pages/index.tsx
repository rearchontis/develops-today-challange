import { Layout } from "../components/layout";
import PostList from "../components/postList";
import { GetServerSideProps } from "next";
import axios from "axios";

export const db: string = 'https://nextjs-challenge.firebaseio.com/posts'

export default function Index({ posts }) {
  return (
    <>
      <Layout title="Latest Posts">
        <h1>The latest posts</h1>
        <PostList posts={posts}/>
        <style jsx>{`
          h1 {
            color: #242526;
            background: #efeffe;
            padding: 1rem;
            min-width: 300px;
            width: 50vw;
            border-radius: 5px;
          }
            div {
            color: #242526;
            min-width: 300px;
            width: 50vw;
            padding: 1rem ;
            background: #efeffe;
            border-radius: 5px;
            margin-bottom: 10px;
          }
        `}</style>
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const response = await axios.get(db + '.json');
  const posts = Object.values(response.data);
  return {
    props: {
      posts
    }
  }
}