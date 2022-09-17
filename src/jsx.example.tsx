import React, {createElement as e, useState} from 'react';

function App() {

    const [count, setCount] = useState(0)
    return e('div',{className: 'container'}, [
      e('h1',{className: 'font-bold', key:1}, `test JSX ${count}`),
      e('button',{className: 'py-2 px-4 border',
       key:2, onClick:() => setCount(count +1) }, 'Click')
    ])
  }
  export default App
  