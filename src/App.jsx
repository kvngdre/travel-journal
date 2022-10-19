import { useState } from 'react';
import './App.css';
import Header from '../components/Header';
import Card from '../components/Card';
import data from './assets/data';

const cardElements = data.map( item => {
    return <Card 
              key={item.id}
              props={item}
              />
})

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Header />
            {cardElements}
        </div>
    );
}

export default App;
