import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class PokemonStats extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            pokemonStatus: []
        }
    }

    componentDidMount() {
        const BASE_URL_STATS = this.props.location.query.pokemon.url
        this.getStatusPokemon(BASE_URL_STATS)
    }

    getStatusPokemon(URL) {
        axios.get(URL).then(resp => this.setState({ pokemonStatus: resp.data }))
    }

    renderImages() {
        const sprites = this.state.pokemonStatus.sprites || []
        return (
            <div className="pokemon-frame">
                {sprites.back_default &&
                    <div className="pokemon-images">
                        <p>Male Default/Shiny</p>
                        <img src={sprites.back_default} alt=""/>
                        <img src={sprites.front_default} alt=""/>
                        <img src={sprites.back_shiny} alt=""/>
                        <img src={sprites.front_shiny} alt=""/>
                    </div>
                }
                
                {sprites.back_female &&
                    <div className="pokemon-images">
                        <p>Female Default/Shiny</p>
                        <img src={sprites.back_female} alt=""/>
                        <img src={sprites.front_female} alt=""/>
                        <img src={sprites.back_shiny_female} alt=""/>
                        <img src={sprites.front_shiny_female} alt=""/>
                    </div>
                }
            </div>
        )
    }

    renderStats() {
        const weight = this.state.pokemonStatus.weight
        const height = this.state.pokemonStatus.height
        const name = this.state.pokemonStatus.name
        return (
            <div>
            <div className="pokemon-stats">
                <span><strong>Name: </strong>{name}</span>
            </div>
            <div className="pokemon-stats">
               <span><strong>Weight: </strong>{weight}</span>
            </div>
            <div className="pokemon-stats">
                <span><strong>Height: </strong>{height}</span> 
            </div>
            </div>         
        )
    }

    renderTypes(){
        const typesList = this.state.pokemonStatus.types || []
        const findTypes = types => types.type
        const type = type =>  [].concat(type.name,',')
        const result = typesList.map(findTypes).map(type)
        return (
            <div className="pokemon-types">
                <span><strong>Types: </strong>{result}</span>
            </div>
        )
    }

    renderAbilities(){
        const abilitiesList = this.state.pokemonStatus.abilities || []
        const findAbilities = abilities => abilities.ability
        const ability = ability => [].concat(ability.name, ',')
        const result  = abilitiesList.map(findAbilities).map(ability)
        return (
            <div className="pokemon-abilities">
                <span><strong>Ability: </strong>{result}</span>
            </div>
        )
    }

    render() {
        return (
            <div className="pokemon-general">
                <h1>Pokemon Status</h1>
                <div className="pokemon-info">
                    {this.renderStats()}
                    {this.renderTypes()}
                    {this.renderAbilities()}
                </div>
                {this.renderImages()}
                <Link to="/" className="pokemon-button">
                    <button type="submit" id="button-custom">Voltar</button>
                </Link>
            </div>
        )
    }
}

export default PokemonStats