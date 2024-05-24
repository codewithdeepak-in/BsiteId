import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './router.tsx'
import ApplicationLayout from './Layouts/application.layout.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApplicationLayout>
      <Routers />
    </ApplicationLayout>
  </React.StrictMode>,
)
