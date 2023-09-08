import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Pokedex from './components/Pokedex/Pokedex'

interface Pokemon {
  id: number;
  name: string;
  sprites: { versions: {'generation-v': {'black-white': {'animated': {'front_default': string}}}}} 
}

function App() {
  
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [escolha, setEscolha] =  useState(1);
  
  useEffect (() => {
    
    async function loadPokemon() {
      try {
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${escolha}`);
        const pokemonApresentado = await response.json();
        setPokemon(pokemonApresentado);
      } catch (error: unknown) {
        console.log(error);
      }
    }

    loadPokemon();

  }, [escolha])

  const next = () => {
    if(escolha >= 1010) {
      alert('Operação inválida!')
    } else {
      setEscolha(escolha + 1)
    }
  }

  const previous = () => {
    if(escolha === 1) {
      alert('Operação inválida!')
    } else {
      setEscolha(escolha - 1)
    }
  }

  return (
    <>
      <Header/>
      <Pokedex pokemon ={pokemon} next ={next} previous ={previous} setEscolha={setEscolha}/>
      <Footer/>
    </>
  )
}

export default App
