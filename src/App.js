import './App.scss';
import './markdown.scss'
import placeholder from './placeholder';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function App() {
  const [input, setInput] = useState(placeholder)

  const onChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <div className="App">
      <div className='both-wrappers editor-wrapper'>
        <textarea
          id='editor'
          value={input}
          spellCheck='false'
          onChange={onChange}
        />
      </div>

      <div className='both-wrappers preview-wrapper'>
          <ReactMarkdown
            id='preview'
            className='markdown'
            children={input}
            remarkPlugins={[remarkGfm]}
          ></ReactMarkdown>
      </div>
    </div>
  );
}

export default App;