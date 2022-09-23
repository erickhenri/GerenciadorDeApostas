import { useEffect, useState } from 'react';
import { AddPeople } from './components/AddPeople';
import { Card } from './components/Card';
import { StopCard } from './components/StopCard';

import './styles.css';

export function App() {
    const [peoples, setPeoples] = useState<{name: string;amount: number;}[]>(
        JSON.parse(localStorage.getItem("peoples")!) || []
    )
    const [peoplesStop, setPeoplesStop] = useState<{name: string;amount: number;}[]>(
        JSON.parse(localStorage.getItem("peoplesStop")!) || []
    )
    const [betAmount, setBetAmount] = useState(Number(localStorage.getItem("betAmount") || 0));

    useEffect(() => {
        localStorage.setItem("betAmount", String(betAmount))
    }, [betAmount])
    useEffect(() => {
        localStorage.setItem("peoples", JSON.stringify(peoples))
    },[peoples])
    useEffect(() => {
        localStorage.setItem("peoplesStop", JSON.stringify(peoplesStop))
    }, [peoplesStop])

    return (
        <div className="App">
            <header>
                <h1>Gerenciador de apostas</h1>
            </header>
            <div className='container'>
                <div className="menuOptions">
                    <AddPeople 
                        setPeoples={setPeoples} 
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
                            setPeoples={setPeoples}
                            setPeoplesStop={setPeoplesStop}
                            betAmount={betAmount}
                            key={key}
                        />
                        ))}
                </div>
                <div className='stopPeoples'>   
                    <h2>Integrantes Pausados</h2>
                    <div className="stopCards">
                        {peoplesStop.map((personStop, key) => (
                            <StopCard 
                                personStop={personStop}
                                setPeoples={setPeoples}
                                setPeoplesStop={setPeoplesStop}
                                key={key}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

