import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName,setplayerName] = useState(initialName);
  const [isEditing, setIsEditting] = useState(false);

  function handleEditClick() {
    setIsEditting((editing)=>!editing);
  }

  function handleChange (e) {
    setplayerName(e.target.value);
  }

  let editablePlayer = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayer = <input type="text" required value={playerName} onChange={handleChange} />;
    // btnCaption='Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player-info">
        {editablePlayer}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
