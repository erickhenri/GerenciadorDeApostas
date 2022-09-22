import './styles.css'

interface CardProps {
    person: {
        name: string;
        amount: number;
    },
    setPlayerValue(key: number): void,
    deleteCard(key: number): void,
    id: number,
    
}

export function Card({ person, setPlayerValue, deleteCard, id }: CardProps) {
    return (
        <div className="card">
            <button onClick={() => deleteCard(id)} className='delete'>X</button>
            <span className='name'>{person.name}</span>
            <span className='value'>Valor acumulado: R$ {person.amount}</span>
            <div className='options'>
            <button onClick={() => setPlayerValue(id)} className='win'>
                ✓
            </button>
            <button className='pay'>Pagar</button>
            </div>
        </div>
    )
}