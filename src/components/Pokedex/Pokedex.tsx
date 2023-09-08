import styles from './Pokedex.module.css';

interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string};
}

const Pokedex: React.FC<{ pokemon: Pokemon | null, next: () => void, previous: () => void}> = ( { pokemon, next, previous }) => {
  
  return ( 

    <main className={styles.main}>

        <img src={pokemon ? pokemon.sprites.front_default : '#'} alt="pokemon" className={styles.pokemonImage}/>

        <div className={styles.pokemonData}>
            <span className={styles.pokemonNumber}> {pokemon && pokemon.id} </span> -
            <span className={styles.pokemonName}> {pokemon && pokemon.name} </span>
        </div>

        <div className={styles.pokeButtons}>
            <button onClick={previous}> Prev </button>
            <button onClick={next}> Next </button>
        </div>

        <img src="../../../assets/pokedex.png" alt="" className={styles.pokedexBack}/>

    </main>
  )
}

export default Pokedex