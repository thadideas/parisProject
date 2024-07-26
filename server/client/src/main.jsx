import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/app.css'
import EventProvider from './contexts/eventContext.jsx';
import GamblerProvider from './contexts/gamblerContext.jsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <GamblerProvider>
    <EventProvider>
      <App />

    </EventProvider>
    </GamblerProvider>
  </React.StrictMode>,
)
