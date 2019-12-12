import React from 'react';
import './App.css';

import CoderJoke from "./components/CoderJoke";

//A few things to remember, App.css styles apply to EVERYTHING. So use that.
// Outside of that knowledge, just import your components and have a blast, I guess.

function App() {
  return (
    <div className="App">
      <CoderJoke />
    </div>
  );
}

export default App;
