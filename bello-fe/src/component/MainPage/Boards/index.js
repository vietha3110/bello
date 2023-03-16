import { useState } from "react";
import './index.css';

const Boards = () => {
    const mockUp = ["Boards", "Views", "Members", "Settings", "Upgrades"];
    const [showCreateBoard, setShowCreateBoard] = useState(false);
    const [boardName, setBoardName] = useState("");
    const [visible, setVisible] = useState("")
    const clickCreateBoard = () => {
        setShowCreateBoard(!showCreateBoard);
    }
    const submitNewBoard = () => {
        console.log(boardName)
    }
    return (
        <div className="boards-container">
            <div className="workspace-box">
                <span>YOUR WORKSPACES</span>
            
                <div className="workspace-content">
                    <div>
                        User Name
                    </div>
                    {
                        mockUp.map(el => 
                            <div key={el}>
                                <span>{el}</span>
                            </div>
                        )
                    }
                </div>
                <div className="boards-info">
                    <div className="board-creation" onClick={clickCreateBoard}>
                        <span>
                            Create new board
                        </span>
                    </div>
                    {showCreateBoard && 
                        <div className="board-creation-form">
                            <div className="board-creation-form-title">
                                <span>Create board</span>       
                            </div>
                            <div className="board-creation-form-background">
                                <span>Background</span>       
                            </div>
                            <div className="board-creation-form-info">
                                <label>Board title</label>
                                <input
                                    type='text'
                                    value={boardName}    
                                    onChange={e => setBoardName(e.target.value)}
                                />    
                                <span>👋 Board title is required</span>    
                            </div>    
                            <div className="board-creation-form-option">
                                <label>
                                    Visibility
                                </label>
                                <select>
                                    <option>workspace</option>
                                    <option>private</option>
                                    <option>public</option>
                                </select>
                            </div>
                            <div className="board-creation-form-submitbtn">
                                <button disabled={boardName ? false : true} onClick={submitNewBoard}>Create</button>
                            </div>
                            <div className="board-creation-form-template">
                                <button>Start with a template</button>
                            </div>
                            <div className="board-creation-form-notice">
                                <p>By using images from Unsplash, you agree to their license and Terms of Services.</p>
                            </div>
                        </div>        
                    }
                </div>
                </div>
            </div>

    )
}


export default Boards;
