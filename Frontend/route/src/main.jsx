import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[{
      path:"",
      element:<Home/>
    },
    {
      path:"",
      element:<About/>
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Home from './Components/Home/Home.jsx'
// import About from './Components/About/About.jsx'

// // Custom error page component
// const ErrorPage = () => (
//   <div>
//     <h1>404 - Page Not Found</h1>
//     <p>Sorry, the page you are looking for does not exist.</p>
//   </div>
// );

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <ErrorPage />,  // Add custom error handling
//     children: [
//       {
//         path: "/",  // Home route with the correct path
//         element: <Home />
//       },
//       {
//         path: "about",  // About route with its own path
//         element: <About />
//       }
//     ]
//   }
// ]);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>
// );
