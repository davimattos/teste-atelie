import React, { Component } from 'react'
import axios from 'axios'

import Header from '../template/header'
import ContentHeader from '../template/contentHeader'

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pokemonList: [],
            BASE_URL_LIST: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=114'
        }

        this.getList = this.getList.bind(this)
    }

    componentWillMount() {
        const BASE_URL_LIST = this.state.BASE_URL_LIST
        this.getList(BASE_URL_LIST)
    }

    getNextAndPreviousList(url) {
        this.props.getList(url)
    }

    getList(URL) {
        axios.get(URL).then(resp => this.setState({ pokemonList: resp.data }))
    }

    renderRows() {
        const list = this.state.pokemonList.results || []
        return list.map((pokemon, index ) => (
            <p key={pokemon.url}>{pokemon.name}</p>
        ))
    }

    render() {
        console.log()
        return (
            <div>
                <Header />
                <ContentHeader />
                <div className="person-frame">
                    {this.renderRows()}
                </div>
                <div className="button-frame">
                  
                    <button id="button-custom" type="submit" >Previous</button>

                    <button id="button-custom" type="submit" >Next</button>

                </div>
            </div>

        )
    }
}

export default Dashboard