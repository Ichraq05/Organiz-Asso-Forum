import React from 'react';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import App from './App';
import './index.css';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
