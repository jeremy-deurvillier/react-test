import { useState } from 'react';
import Menu from './Menu';
import Home from './Home';
import Click from './Click';
import Time from './Time';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  function add() {
    setCount(old => old += 1)
  }

  function remove() {
    setCount(old => old -= 1)
  }

  return (<section id="page">
    <Menu />
    <section>
      TEST ({ count * 2 })
    </section>
    <Home firstname='Jérémy' lastname='D' />
    <Click count={ count } add={ add } remove={ remove } />
    <Time />
  </section>);
}

export default App;
