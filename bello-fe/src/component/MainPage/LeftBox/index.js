import './index.css';
import { useState } from 'react';

const LeftBox = () => {
    const workspaceButtons = ["Boards", "Highlights", "Views", "Members", "Setting"]
    const [showBtn, setShowBtn] = useState(false);

    const clickWorkSpace = (e) => {
        e.stopPropagation();
        setShowBtn(!showBtn);
    }
    return (
        <div className="leftsidebar-container">
            <div className='leftsidebar-label'>
                <div className='leftsidebar-title'>
                    <span class="material-symbols-outlined">dashboard</span>
                    <span>Boards</span>
                </div>
                <div  className='leftsidebar-title'>
                    <span class="material-symbols-outlined">grid_view</span>
                    <span>Templates</span>
                </div>
                <div  className='leftsidebar-title'>
                    <span class="material-symbols-outlined">show_chart</span>
                    <span>Home</span>
                </div>
            </div>
            <div>
                Workspaces
                <div onClick={clickWorkSpace}>
                    <span>User Workspaces</span>
                </div>
                {
                    showBtn && 
                    workspaceButtons.map(el => 
                        <div>
                            <span>{el}</span>
                        </div>)
                }
            </div>
        </div>
    )
}

export default LeftBox;
