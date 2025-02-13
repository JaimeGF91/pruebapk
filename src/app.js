import { LitElement, html } from 'lit';
import './components/pokemon-list.js';
import './components/pokemon-detail.js';
import './components/pokemon-evolution.js';

class PokemonApp extends LitElement {
    static get properties() {
        return {
            view: { type: String },
            selectedPokemon: { type: Object }
        };
    }

    constructor() {
        super();
        this.view = 'list';
        this.selectedPokemon = null;
    }

    //
    render() {
        return html`
            ${this.view === 'list' ? html`<pokemon-list @pokemon-selected="${this._onPokemonSelected}"></pokemon-list>` : ''}
            ${this.view === 'detail' ? html`<pokemon-detail .pokemon="${this.selectedPokemon}" @back-to-list="${this._backToList}" @view-evolutions="${this._viewEvolutions}"></pokemon-detail>` : ''}
            ${this.view === 'evolutions' ? html`<pokemon-evolution .pokemon="${this.selectedPokemon}" @back-to-detail="${this._backToDetail}"></pokemon-evolution>` : ''}
        `;
    }

    _onPokemonSelected(event) {
        this.selectedPokemon = event.detail;
        this.view = 'detail';
    }

    _backToList() {
        this.view = 'list';
    }

    _viewEvolutions(event) {
        this.selectedPokemon = event.detail;
        this.view = 'evolutions';
    }

    _backToDetail() {
        this.view = 'detail';
    }
}

customElements.define('pokemon-app', PokemonApp);