import {useState} from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBq_LCQRv9dRokplXEGJ3pJn-7Sngp0jTE",
  authDomain: "countdown-c6938.firebaseapp.com",
  databaseURL: "https://countdown-c6938-default-rtdb.firebaseio.com",
  projectId: "countdown-c6938",
  storageBucket: "countdown-c6938.firebasestorage.app",
  messagingSenderId: "1031360270394",
  appId: "1:1031360270394:web:b79f04c0199cf7ca1b2503",
  measurementId: "G-FBRTFYP0EL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



function Messages(){
    const [text, setText] = useState("");
async function handleSubmit(e){
    e.preventDefault();
    await addDoc(collection(db, "texts"), {
        content: text,
        createdAt: new Date()
      });
      setText("")
    }
 return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <button type="submit">Save</button>
    </form>
  );
}
export default Messages;