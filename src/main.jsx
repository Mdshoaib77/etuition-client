// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { RouterProvider } from "react-router/dom";
// import './index.css'
// import App from './App.jsx'
// import { router } from './routes/Router.jsx';
// import AuthProvider from './context/AuthProvider.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//    <AuthProvider>
//      <RouterProvider router={router} />,
//    </AuthProvider>
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"; // ✅ fixed import
import './index.css'
import AuthProvider from './context/AuthProvider.jsx';
import { router } from './routes/Router.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
