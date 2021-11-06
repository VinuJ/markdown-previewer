import './App.scss';
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

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\` , between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
3. Last but not least, embedded images:

![Heart Image](https://hotemoji.com/images/emoji/z/az9f8v28dksz.png)
`
