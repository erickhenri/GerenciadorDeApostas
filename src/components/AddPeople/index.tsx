import { useState } from 'react'
import './styles.css'

interface AddPeopleProps{
    setPeoples: React.Dispatch<React.SetStateAction<{
        name: string;
        amount: number;
    }[]>>
}

export function AddPeople({ setPeoples }: AddPeopleProps) {
    const [onPopUp, setOnPopUp] = useState(false)
    const [name, setName] = useState("")

    function addPeople() {
        setPeoples(peoples => {
            const newPeoples = [
                ...peoples, 
                {
                    name, 
                    amount: 0,
                }
            ]
            return newPeoples;
        })

        changePopUp()
    }
    function changePopUp() {
        setOnPopUp(() => !onPopUp)
    }

    return (
        <div className='addPeople'>
            <button onClick={changePopUp}>Adicionar Pessoa</button>
            {onPopUp && (
                <div className="popUpArea">
                    <div className="popUp">
                    <span>Nome</span>
                        <input type="text" onChange={(e) => {setName(e.target.value)}}/>
                        <button onClick={addPeople} type='submit'>Adicionar</button>
                    </div>
                </div>
            )}
        </div>
    )
}