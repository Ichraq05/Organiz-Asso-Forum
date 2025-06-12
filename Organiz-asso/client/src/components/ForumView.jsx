import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ThreadView from './ThreadView';

export default function ForumView({ forumKey, utilisateur, onBack }) {
  const [threads, setThreads] = useState([]);
  const [creating, setCreating] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [activeThread, setActiveThread] = useState(null);

  useEffect(() => {
    axios.get(`/message?forum=${forumKey}`)
      .then(res => setThreads(res.data.messages.filter(m=>!m.replyTo)))
      .catch(console.error);
  }, [forumKey]);

  if (!utilisateur.admin && forumKey==='ferme') {
    return (
      <div className="card">
        <button
          className="btn btn-primary back-button"
          onClick={onBack}
        >
          ← Retour
        </button>
        <p>Accès réservé aux administrateurs.</p>
      </div>
    );
  }

  if (activeThread) {
    return (
      <ThreadView
        threadId={activeThread}
        forumKey={forumKey}
        utilisateur={utilisateur}
        onBack={()=>setActiveThread(null)}
      />
    );
  }

  const posterDiscussion = async () => {
    if (!title.trim()||!content.trim()) return;
    await axios.post('/message',{
      userId:utilisateur._id, title, content, forum:forumKey
    });
    setTitle(''); setContent(''); setCreating(false);
    const res = await axios.get(`/message?forum=${forumKey}`);
    setThreads(res.data.messages.filter(m=>!m.replyTo));
  };

  return (
    <div className="card">
      <button
        className="btn btn-primary back-button"
        onClick={onBack}
      >
        ← Retour
      </button>
      <h2>{forumKey==='ouvert'?'Forum ouvert':'Forum fermé'}</h2>

      {creating ? (
        <>
          <input
            placeholder="Titre de la discussion"
            value={title}
            onChange={e=>setTitle(e.target.value)}
          />
          <textarea
            placeholder="Contenu du premier message"
            value={content}
            onChange={e=>setContent(e.target.value)}
            style={{ width:'100%',height:80 }}
          />
          <button
            className="btn btn-primary"
            onClick={posterDiscussion}
          >
            Publier
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setCreating(false)}
          >
            Annuler
          </button>
        </>
      ) : (
        <button
          className="btn btn-primary"
          onClick={()=>setCreating(true)}
        >
          + Nouvelle discussion
        </button>
      )}

      <ul className="thread-list">
        {threads.map(t=>(
          <li
            key={t._id}
            onClick={()=>setActiveThread(t._id)}
          >
            <div className="thread-bulle">
              <strong>{t.title||'(Sans titre)'}</strong><br/>
              {t.content.length>50?t.content.slice(0,50)+'…':t.content}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
