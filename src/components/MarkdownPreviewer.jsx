import React, { useState, useEffect } from 'react';
import marked from 'marked';
import hljs from 'highlight.js';

import linkRenderer from './linkRenderer';
import initialMarkdown from './initialMarkdown.md';

const initialState = `
### Headers

# h1
## h2
### h3
![alt text](https://image.shutterstock.com/image-photo/pitbull-dog-alway-smile-260nw-629627696.jpg 'Cute Pitbull')
### Blockquote
> To be, or not to be. That is a stupid question.
> ttt
### Code


`;

marked.setOptions({
  gfm: true,
  tables: true,
  mangle: true,
  langPrefix: 'hljs langauge-',
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  renderer: linkRenderer,
});
hljs.registerLanguage('react', () => hljs.getLanguage('html'));

const MarkdownPreviewer = () => {
  const [text, setText] = useState('');
  const [markdown, setMarkdown] = useState(marked(''));

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  const loadMarkdown = async () => {
    const res = await fetch(initialMarkdown);
    const m = await res.text();
    setText(m);
    setMarkdown(() => marked(m));
  };

  useEffect(() => {
    loadMarkdown();
  }, []);
  return (
    <div>
      <header>
        <h1>Markdown Previewer</h1>
      </header>
      <div className='container'>
        <textarea
          name=''
          id='editor'
          value={markdown}
          onChange={(e) => handleChange(e)}
          className='show'
        ></textarea>

        <div
          id='preview'
          className='show'
          dangerouslySetInnerHTML={{ __html: markdown }}
        ></div>
      </div>
    </div>
  );
};

export default MarkdownPreviewer;
