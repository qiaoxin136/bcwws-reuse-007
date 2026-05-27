import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator } from '@aws-amplify/ui-react';
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

const components = {
  Header() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 0 32px' }}>
        <img
          src="/logo.png"
          alt="Thompson & Associates"
          style={{ maxWidth: '240px', width: '100%' }}
        />
        <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '13px', marginTop: '12px', color: '#333', maxWidth: '360px' }}>
          BCWWS REGIONAL EFFLUENT AND REUSE SOLUTIONS - EFFLUENT WATER TRANSMISSION MAIN
        </p>
      </div>
    );
  },
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator components={components}>
      <App />
    </Authenticator>
  </React.StrictMode>
);
