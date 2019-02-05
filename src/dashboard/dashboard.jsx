import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import ContentHeader from '../template/contentHeader'

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pokemonList: [],
            pokemonStats: [],
            BASE_URL_LIST: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=114'
        }

        this.getList = this.getList.bind(this)
    }

    componentWillMount() {
        this.getList(this.state.BASE_URL_LIST)
    }

    getList(URL) {
        axios.get(URL).then(resp => this.setState({ pokemonList: resp.data }))
    }

    getStats(URL) {
        axios.get(URL).then(resp => this.setState({ pokemonStats: resp.data }))
    }

    renderRows() {
        const list = this.state.pokemonList.results || []
        return list.map((pokemon, index ) => (
            <Link to={{ pathname: '/pokemonStats', query: { pokemon } }} key={pokemon.url} >
                    <p>{pokemon.name}</p>
            </Link>
        ))
    }

    render() {
        const previous = this.state.pokemonList.previous
        const next = this.state.pokemonList.next
        return (
            <div>
                <ContentHeader />
                <div className="person-frame">
                    {this.renderRows()}
                </div>
                <div className="button-frame">
                {previous &&
                    <button id="button-custom" type="submit" onClick={() => this.getList(previous)}>Previous</button>
                }
                {next &&
                    <button id="button-custom" type="submit" onClick={() => this.getList(next)}>Next</button>
                }
                </div>
            </div>

        )
    }
}

export default Dashboard