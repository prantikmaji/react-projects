import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0);
  const obj = {
    text: `hello hi bai bai, iso ai ai aiia, hello hi bai bai,
     iso ai ai aiia hello hi bai bai, iso ai ai aiia`,

  };

  return (
    <>
      <h1 className="bg-green-500">hello From App.jsx</h1>
      <Card userName="Ulhas" btnText="explore about me" info={obj} />
      <Card userName="Yash" btnText="know about me" info={obj} />
    </>
  );
}

export default App
