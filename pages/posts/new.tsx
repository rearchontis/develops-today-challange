import { Layout } from "../../components/layout";
import { useRef } from "react";
import { db } from "../index";
import axios from 'axios';


export default function PostCreator() {
  const titleRef = useRef(null);
  const textareaRef = useRef(null);

  const createPost = async event => {
    event.preventDefault();
    const title = titleRef!.current.value;
    const text = textareaRef.current.value;
    const id = Date.now().toString();
    try {
      await axios.post(db + '.json', { title, text, id });
    } catch (e) {
      console.log(e);
    }
    titleRef.current.value = '';
    textareaRef.current.value = '';
  }

  return (
    <Layout title="Create Post">
      <h1>Create Post</h1>
      <form onSubmit={event => event.preventDefault()}>
        <input placeholder="Post title" ref={titleRef} />
        <textarea placeholder="Post text" ref={textareaRef}/>
        <button onClick={createPost}>Create Post</button>
      </form>
      <style jsx>{`
        h1 {
          color: #242526;
          background: #efeffe;
          padding: 1rem;
          min-width: 390px;
          width: 50vw;
          border-radius: 5px;
        }
        form {
          display: flex;
          flex-direction: column;
          background: #efeffe;
          padding: 1rem;
          min-width: 390px;
          width: 50vw;
          border-radius: 5px;
        }
        form > input {
          margin-bottom: 10px;
          font-size: 20px;
          border-radius: 3px;
          border: 1px solid #242526;
          line-height: 35px;
        }
        form > textarea {
          margin-bottom: 10px;
          font-size: 16px;
          border-radius: 3px;
          border: 1px solid #242526;
          height: 100px;
        }
        form > button {
          background: #007bff;
          border: none;
          padding: 1rem;
          cursor: pointer;
          font-size: 16px;
          border-radius: 3px;
          font-weight: bold;
          color: #ffffff;
          transition: 0.1s all ease-in;
        }
        form > button:hover {
          background: darkblue;
        }
      `}</style>
    </Layout>
  )

}