import React, { useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage'

const App = () => {
  const onClickButton = () => alert();
  const [num, setNum] = useState(0);

  return (<>
    <h1 style={{ color: 'red' }}>こんにちは</h1>
    <ColorfulMessage color='blue'>
      お元気ですか？
    </ColorfulMessage>
    <ColorfulMessage color='pink'>
      元気ですwahaha
    </ColorfulMessage>
    <button onClick={onClickButton}>ボタン</button>
  </>);
}

export default App;
