import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const onClick = (e) => navigate('/heroes');

    return (
        <header className='py-4'>
            <button onClick={onClick}>
                <h1 className='text-2xl font-bold'>
                    Overwatch Counter Picker
                </h1>
            </button>
        </header>
    );
};

export default Header;
