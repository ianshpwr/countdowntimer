import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';
import './App.css';
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

function Messages() {
  const [text, setText] = useState("");
  const [texts, setTexts] = useState([]);

  const fetchTexts = async () => {
    const querySnapshot = await getDocs(collection(db, "texts"));
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTexts(data);
  };

  useEffect(() => {
    fetchTexts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      await addDoc(collection(db, "texts"), {
        content: text,
        createdAt: serverTimestamp()
      });
      setText("");
      fetchTexts();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className='damn'>


      <form onSubmit={handleSubmit} className="form">
        <input
        className="inputt"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <button className='button' type="submit">Save</button>
      </form>


      <ul className='list'>
        {texts.map((textItem) => (
          <div key={textItem.id}>{textItem.content}</div>
        ))}
      </ul>

    </div>
  );
}

export default Messages;
