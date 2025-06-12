import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Message from './Message';

export default function ThreadView({ threadId, forumKey, utilisateur, onBack }) {
  const [messages, setMessages] = useState([]);
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    axios.get(`/message?forum=${forumKey}`)
      .then(res => {
        const all = res.data.messages;
        const root = all.find(m=>m._id===threadId) || { _id:threadId, content:'<Message supprimé>' };
        const replies = all.filter(m=>m.replyTo===threadId);
        setMessages([root,...replies]);
      })
      .catch(console.error);
  }, [threadId, forumKey]);

  const posterReponse = async e => {
    e.preventDefault();
    if (!replyText.trim()) return;
    await axios.post('/message',{
      userId:utilisateur._id, content:replyText,
      replyTo:threadId, forum:forumKey
    });
    setReplyText('');
    const res = await axios.get(`/message?forum=${forumKey}`);
    const all = res.data.messages;
    const root = all.find(m=>m._id===threadId) || { _id:threadId, content:'<Message supprimé>' };
    const replies = all.filter(m=>m.replyTo===threadId);
    setMessages([root,...replies]);
  };

  return (
    <div className="card">
      <button
        className="btn btn-primary back-button"
        onClick={onBack}
      >
        ← Retour
      </button>
      {messages.map(m=>(
        <Message
          key={m._id}
          message={m}
          utilisateur={utilisateur}
          onSupprime={id=>setMessages(ms=>ms.filter(x=>x._id!==id))}
        />
      ))}
      <form onSubmit={posterReponse}>
        <textarea
          value={replyText}
          onChange={e=>setReplyText(e.target.value)}
          placeholder="Écrire une réponse…"
          style={{ width:'100%',height:60 }}
          required
        />
        <button
          type="submit"
          className="btn btn-primary"
        >
          Répondre
        </button>
      </form>
    </div>
  );
}
