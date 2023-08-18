import { getHeroesByPublisher } from '../helpers/'

export const HeroList = ( publisher ) => {
  console.log(publisher)

  const heroes = getHeroesByPublisher( publisher ); 
  console.log(heroes)

  
  return (
    <ul>
      {
        heroes.map( hero => (
          <li key={ hero.id }>
            { hero.superhero }            
          </li>
        ))
      }
      </ul>

  )
}

 
