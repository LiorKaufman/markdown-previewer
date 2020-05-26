import React from 'react';
import './App.css';
import MarkdownPreviewer from './components/MarkdownPreviewer';

import 'highlight.js/styles/dracula.css';

function App() {
  return (
    <div>
      <MarkdownPreviewer />
    </div>
  );
}

export default App;
