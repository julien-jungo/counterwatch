import HeroButton from "./HeroButton";

const HeroGrid = ({ heroes }) => {
    return (
        <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 place-content-center gap-4'>
            {heroes.map((hero, i) => <HeroButton key={i} hero={hero} />)} 
        </div>
    )
};

export default HeroGrid;
