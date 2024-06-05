import { useNavigate } from "react-router-dom";

const HeroButton = ({ hero }) => {
    const navigate = useNavigate();

    const onClick = (e) => navigate(`/heroes/${hero.id}`);

    return (
        <button
            className='flex flex-col gap-4 items-center bg-slate-900 p-4 rounded-xl shadow-lg transition ease-in-out hover:scale-110 duration-300'
            onClick={onClick}
        >
            <img
                className='rounded'
                src={`/icons/${hero.id}.webp`}
                alt={hero.name}
            />
            <p className='truncate'>
                {hero.name}
            </p>
        </button>
    );
};

export default HeroButton;
