import { heroes } from "../data/heroes"

export const getHeroesByPublisher = (publisher)=>{
    const validPublisher = ['DC Comics','Marvel Comics'];
    if(!validPublisher.includes(publisher)){
        throw new Error('This Publisher does not valid');
    }
    return heroes.filter(hero=> hero.publisher === publisher);
}