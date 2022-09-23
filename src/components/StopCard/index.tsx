import './styles.css'

interface StopCardProps {
    personStop: {
        name: string;
        amount: number;
    }
    setPeoples: React.Dispatch<React.SetStateAction<{
        name: string;
        amount: number;
    }[]>>
    setPeoplesStop: React.Dispatch<React.SetStateAction<{
        name: string;
        amount: number;
    }[]>>
}

export function StopCard({ personStop, setPeoples, setPeoplesStop } : StopCardProps) {
    function backToBetting() {
        setPeoplesStop((peoplesStop) => peoplesStop.filter((personStopState) => personStopState !== personStop))

        setPeoples(peoples => {
            const newPeoples = [
                ...peoples, 
                personStop
            ]

            return newPeoples;
        })
    }

    return (
        <div className='stopCard'>
            <span className='name'>{personStop.name}</span>
            <span>Valor Acumulado: R$ {personStop.amount}</span>
            <button onClick={backToBetting} className='toBack'>Voltar as apostas</button>
        </div>
    )
}