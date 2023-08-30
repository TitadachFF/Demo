import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostClassComponent from './components/PostClassComponent'
import PostFunctionComponent from './components/PostFunctionComponent'
import Comment from './components/Comment'
import StateInClass from './components/stateinclass'
import StateInFunction from './components/StateInFunction'
import Card from './components/Card'
import Example from './components/Example'

function App() {

  const [count, setCount] = useState(0);

  return (

    <>
      <div>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

      </div>

      <h1>Vite + React</h1>

      <div className="card">

        <h1>React Demo</h1>

        <PostClassComponent userId="Titadach_SE" message="เรียนวันนี้ไม่สนุกเลย">
          <Comment userId="Hart_SE:" message=" เรียนวันนี้ไม่สนุกเลย" />
          <br />
          <Comment userId="P_SE:" message=" เรียนวันนี้ไม่สนุกเลย" />
        </PostClassComponent>

      </div>

      <StateInClass />
      <StateInFunction />

      <PostFunctionComponent />
      <Card/>
      <Example/>

    </>
  );
}

export default App;