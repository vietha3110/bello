import LeftBox from "./LeftBox"
import Boards from "./Boards";
import './index.css';

const MainPage = () => {
    return (
        <div className="mainpage-container">
            <LeftBox />
            <Boards/>
        </div>
    )
}

export default MainPage;
