import styles from './Pokedex.module.css';
import { useState } from 'react'

interface Pokemon {
  id: number;
  name: string;
  sprites: { 'front_default': string }; 
}


const Pokedex: React.FC<{ pokemon: Pokemon | null, next: () => void, previous: () => void, setEscolha: React.Dispatch<React.SetStateAction<number>>}> = 
    ( { pokemon, next, previous, setEscolha }) => {
  
    const [input, setInput] = useState<number>();
    
    function insert(ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        ev.preventDefault();
        
        if(typeof(input) === 'number') {
          
          if(input > 1010 || input < 1) {
            alert("Não existe pokemon com esse ID!");
            return;
          } else {
            setEscolha(input);
          }
          
        }
    }
      
  return ( 

    <main className={styles.main}>

        <img src={pokemon ? pokemon.sprites.front_default : '#'} alt="pokemon" className={styles.pokemonImage}/>

        <div className={styles.pokemonData}>
            <span className={styles.pokemonNumber}> {pokemon && pokemon.id} </span> -
            <span className={styles.pokemonName}> {pokemon && pokemon.name} </span>
        </div>
        
        <form className={styles.pokeSearch}>
          <input
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(parseInt(e.target.value))}
            placeholder="Digite um Número"
            required
          />
          <button onClick={(ev) => insert(ev)}> Buscar </button>
        </form>

        <div className={styles.pokeButtons}>
            <button onClick={previous}> Prev </button>
            <button onClick={next}> Next </button>
        </div>

        <img src="../../../assets/pokedex.png" alt="" className={styles.pokedexBack}/>

    </main>
  )
}

export default Pokedex