import { LitElement, html, css } from 'lit';

class PokemonDetail extends LitElement {
    static get properties() {
        return {
            pokemon: { type: Object }
        };
    }

    static get styles() {
        return css`
            /* Add your styles here */
        `;
    }

    render() {
        return html`
            <div>
                <button @click="${this._backToList}">Back to List</button>
                <h2>${this.pokemon.name}</h2>
                <img src="${this.pokemon.image}" alt="${this.pokemon.name}">
                <p>Type: ${this.pokemon.type}</p>
                <button @click="${this._viewEvolutions}">View Evolutions</button>
            </div>
        `;
    }

    _backToList() {
        this.dispatchEvent(new CustomEvent('back-to-list'));
    }

    _viewEvolutions() {
        this.dispatchEvent(new CustomEvent('view-evolutions', { detail: this.pokemon }));
    }
}

customElements.define('pokemon-detail', PokemonDetail);