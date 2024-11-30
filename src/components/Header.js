import { useNavigate } from "react-router-dom";
import owIcon from "../img/overwatch.png";

const Header = () => {
    const navigate = useNavigate();

    const onClick = (e) => navigate('/heroes');

    return (
        <header className='py-4'>
            <button onClick={onClick}>
                <div className="flex items-center">
                    <img src={owIcon} alt="Overwatch Icon" className='inline-block w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full p-1.5 mr-3' />
                    <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold truncate'>
                        Counter Picker
                    </h1>
                </div>
            </button>
        </header>
    );
};

export default Header;
