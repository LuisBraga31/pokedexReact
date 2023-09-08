import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Pokedex from './components/Pokedex/Pokedex'

interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string};
}

function App() {
  
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [escolha, setEscolha] =  useState(1);
  
  useEffect (() => {
    setEscolha(1);
    
    async function loadPokemon() {
      try {
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${escolha}`);
        const pokemonApresentado = await response.json();
        setPokemon(pokemonApresentado);
        console.log(pokemonApresentado)
      } catch (error: unknown) {
        console.log(error);
      }
    }

    loadPokemon();

  }, [escolha])

  
  return (
    <>
      <Header/>
      <Pokedex pokemon ={pokemon} />
      <Footer/>
    </>
  )
}

export default App
