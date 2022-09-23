import { useState } from 'react';
import { PopUpDelete } from '../PopUpDelete';
import './styles.css'

interface CardProps {
    person: {
        name: string;
        amount: number;
    },
    setPeoples: React.Dispatch<React.SetStateAction<{
        name: string;
        amount: number;
    }[]>>
    setPeoplesStop: React.Dispatch<React.SetStateAction<{
        name: string;
        amount: number;
    }[]>>
    betAmount: number    
}

export function Card({ person, setPeoples, setPeoplesStop, betAmount }: CardProps) {
    const [openPopUp, setOpenPopUp] = useState(false)

    function addMoneyToUser() {
        setPeoples((peoples) => peoples.map((personState) => (
            personState === person
            ?   {
                ...personState,
                amount: personState.amount + (peoples.length - 1)*betAmount,
                }
            :   {
                ...personState,
                amount: personState.amount - betAmount,
                }
        ))
        )
    }

    function deleteCard() {
        setPeoples((peoples) => peoples.filter((personState) => personState !== person))
    }
    
    function addPersonStop() {
        setPeoples((peoples) => peoples.filter((personState) => personState !== person))

        setPeoplesStop(peoplesStop => {
            const newPeoplesStop = [
                ...peoplesStop, 
                person
            ]

            return newPeoplesStop;
        })
    }

    return (
        <div className="card">
            <button onClick={() => setOpenPopUp(true)} className='delete'>X</button>
            <span className='name'>{person.name}</span>
            <span className='value'>Valor acumulado: R$ {person.amount}</span>
            <div className='options'>
                <button onClick={addMoneyToUser} className='win'>
                    ✓
                </button>
                <button onClick={addPersonStop} className='stop'>Parar</button>
            </div>

            {openPopUp &&
                <PopUpDelete 
                    deleteCard={deleteCard}
                    setOpenPopUp={setOpenPopUp}
                />
            }
        </div>
    )
}