import {useState} from "react";

export default function Player({initialName, symbol, isActive}) {

    const [playerName, setName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false)

    function handleChange(_event) {
        setName(_event.target.value)
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {!isEditing && <span className="player-name">{playerName}</span>}
                {isEditing && <input required type="text" value={playerName} onChange={handleChange}/>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}>{isEditing ? 'Save' : "Edit"}</button>
        </li>
    )
}