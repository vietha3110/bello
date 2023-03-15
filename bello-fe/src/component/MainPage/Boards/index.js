

const Boards = () => {
    const mockUp = ["Boards", "Views", "Members", "Settings", "Upgrades"];
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
                            <div>
                                <span>{el}</span>
                            </div>
                        )
                    }
                </div>
                <div className="boards-info">
                    <div className="board-creation">
                        <span>
                            Create new board
                        </span>
                    </div>
                </div>
                </div>
            </div>

    )
}


export default Boards;
