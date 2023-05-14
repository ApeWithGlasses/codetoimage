import ActionBtns from './ActionBtns';
import Code from './Code';
import CodePreview from './CodePreview';

import { useState } from 'react';

const Main = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  }

  return (
    <main>
        < Code value={text} onChange={handleInputChange}/>
        < CodePreview text={text} />
        < ActionBtns text={text} setText={setText}/>
    </main>
  )
}

export default Main