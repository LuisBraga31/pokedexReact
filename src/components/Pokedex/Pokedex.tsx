import styles from './Pokedex.module.css';

const Pokedex = () => {
  return (
    <main className={styles.main}>

        <img src="#" alt="pokemon" className={styles.pokemonImage}/>

        <div className={styles.pokemonData}>
            <span className={styles.pokemonNumber}> 01 </span> -
            <span className={styles.pokemonName}> Bulbassaur </span>
        </div>

        <div className={styles.pokeButtons}>
            <button> Ant </button>
            <button> Next </button>
        </div>

        <img src="../../../assets/pokedex.png" alt="" className={styles.pokedexBack}/>

    </main>
  )
}

export default Pokedex