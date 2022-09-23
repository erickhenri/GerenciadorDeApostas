import './styles.css'

interface PopUpDeleteProps {
    deleteCard: () => void,
    setOpenPopUp: React.Dispatch<React.SetStateAction<boolean>>,
}

export function PopUpDelete({ deleteCard, setOpenPopUp } : PopUpDeleteProps) {
    function removeCard() {
        setOpenPopUp(false)
        deleteCard()
    }

    return(
        <div className="popUpDeleteArea">
            <div className="popUpDelete">
                <span>Tem certeza de que deseja remover <strong>permanentemente</strong> este jogador?</span>
                <div className="options">
                    <button onClick={() => setOpenPopUp(false)} className='cancel'>Cancelar</button>
                    <button onClick={removeCard} className='remove'>Remover</button>
                </div>
            </div>
        </div>
    )
}