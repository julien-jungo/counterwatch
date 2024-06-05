import { useParams } from "react-router-dom";
import HEROES from "../../heroes";
import HeroGrid from "../HeroGrid";
import HeroBanner from "../HeroBanner";

const Hero = () => {
    const { id } = useParams();

    const hero = HEROES
        .find(h => h.id === id);
    
    const weakAgainst = hero.weakAgainst
        .map((id) => HEROES.find((h) => h.id === id));

    return (
        <div className='flex flex-col items-center gap-6'>
            <HeroBanner hero={hero} />

            <h3 className='text-3xl'>
                Weak against
            </h3>
            {
                (weakAgainst.length > 0)
                && <HeroGrid heroes={weakAgainst} />
            }
        </div>
    );
};

export default Hero;
