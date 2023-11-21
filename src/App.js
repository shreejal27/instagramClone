import React from 'react';
import './App.css';

import Aside from "./components/Aside"
import Story from "./components/Story"
import Post from "./components/Post"
import Suggestion from "./components/Suggestion"

export default function App() {
  return (
    <div className="App">
      <Aside/>
      <div className='Content'>
      <Story/>
      <Post/>
      </div>
      <Suggestion/>
    </div>
  );
}

