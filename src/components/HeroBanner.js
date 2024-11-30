const HeroBanner = ({ hero }) => {
    return (
        <div className='w-screen py-6 flex gap-4 flex-col items-center bg-slate-900'>
            <img
                className='size-32 rounded'
                src={require(`../icons/${hero.id}.webp`)}
                alt={hero.name}
            />
            <h2 className='text-4xl font-semibold'>
                {hero.name}
            </h2>
        </div>
    );
};

export default HeroBanner;
