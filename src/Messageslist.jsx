// MessagesList.jsx
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

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

export default function MessagesList() {
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

  return (
    <div>
      <h2>All Messages</h2>
      <ul list>
        {texts.length === 0 && <li>No messages found.</li>}
        {texts.map(({ id, content }) => (
          <div key={id}>{content}</div>
        ))}
      </ul>
    </div>
  );
}
