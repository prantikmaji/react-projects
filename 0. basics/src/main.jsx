import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' // <--- Make sure this import exists!

//creating custom component in react

const reactEle1 = (

<a href='https://google.com' >visit Google from react1</a>)

const reactEle2 = React.createElement(
  'a',
  {href : "https://google.com", target : '_blank0'},
  "visit google"
)


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
