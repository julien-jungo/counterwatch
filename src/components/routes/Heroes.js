import HeroGrid from "../HeroGrid"
import HEROES from "../../heroes";
import SearchBar from "../SearchBar";
import { useState } from "react";

const Heroes = () => {
    const [heroes, setHeroes] = useState(HEROES);

    const filterHeroes = (filterTerm) => {
        const filteredHeroes = HEROES.filter((hero) => (
            hero.name.toLowerCase().startsWith(filterTerm.toLowerCase())
        ));

        setHeroes(filteredHeroes);
    };

    return (
        <div className='flex flex-col gap-6'>
            <SearchBar onSearchTermChange={filterHeroes} />
            <HeroGrid heroes={heroes} />
        </div>
    );
};

export default Heroes;
