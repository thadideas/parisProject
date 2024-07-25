import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/app.css'
import EventProvider from './contexts/eventContext.jsx';

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <EventProvider>
      <App />

    </EventProvider>
  </React.StrictMode>,
)
