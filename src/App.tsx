import { useEffect, useState } from 'react';
import { AddPeople } from './components/AddPeople';
import { Card } from './components/Card';

import './styles.css';

export function App() {
    const [peoples, setPeoples] = useState<{name: string;amount: number;}[]>([])
    const [betAmount, setBetAmount] = useState(0);

    useEffect(() => {
        if(localStorage.getItem("peoples")) {
            setPeoples(JSON.parse(localStorage.getItem("peoples")!))
        }
        if(localStorage.getItem("betAmount")) {
            setBetAmount(Number(localStorage.getItem("betAmount") || 0))
        }
    }, [])
    useEffect(() => {
        if(betAmount !== 0) {
            localStorage.setItem("betAmount", String(betAmount))
        }
    }, [betAmount])

    function setPlayerValue(id : number) {
        setPeoples(peoples.map((person, index) => (
            index === id 
            ? {
                ...person,
                amount: person.amount + (peoples.length - 1)*betAmount,
                }
            : {
                ...person,
                amount: person.amount - betAmount,
                }
        ))
        )
    }
    function deleteCard(id: number) {
        console.log(peoples)
        setPeoples((peoplesArray) => {
            peoplesArray.splice(id, 1)
            localStorage.setItem("peoples", JSON.stringify(peoplesArray))

            return peoplesArray;
        })
    }

    return (
        <div className="App">
            <header>
                <h1>Gerenciador de apostas</h1>
            </header>
            <div className='container'>
                <div className="menuOptions">
                    <AddPeople 
                        setPeoples={setPeoples} 
                        peoples={peoples}
                    />
                    <div className='betAmount'>
                        <label>Valor da aposta</label>
                        <input 
                            type="number" 
                            onChange={(e) => setBetAmount(Number(e.target.value))}
                            value={betAmount}
                        />
                            
                    </div>
                </div>
                <div className="cards">
                    {peoples.map((person, key) => (
                        <Card 
                            person={person} 
                            setPlayerValue={setPlayerValue}
                            deleteCard={deleteCard}
                            id={key}
                            key={key}
                        />
                        ))}
                </div>
            </div>
        </div>
    )
}

