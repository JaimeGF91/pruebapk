import { LitElement, html, css } from 'lit';
import pokemonData from '../data/pokemon.json';

class PokemonList extends LitElement {
    static get styles() {
        return css`
            /* Add your styles here */
        `;
    }

    render() {
        return html`
            <ul>
                ${pokemonData.map(pokemon => html`
                    <li @click="${() => this._selectPokemon(pokemon)}">
                        <img src="${pokemon.image}" alt="${pokemon.name}">
                        <span>${pokemon.name}</span>
                    </li>
                `)}
            </ul>
        `;
    }

    _selectPokemon(pokemon) {
        this.dispatchEvent(new CustomEvent('pokemon-selected', { detail: pokemon }));
    }
}

customElements.define('pokemon-list', PokemonList);