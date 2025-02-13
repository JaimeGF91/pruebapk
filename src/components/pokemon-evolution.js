import { LitElement, html, css } from 'lit';

class PokemonEvolution extends LitElement {
    static get properties() {
        return {
            pokemon: { type: Object },
            showModal: { type: Boolean }
        };
    }

    constructor() {
        super();
        this.showModal = false;
    }

    static get styles() {
        return css`
            /* Add your styles here */
            .modal {
                display: none;
                position: fixed;
                z-index: 1;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
                background-color: rgb(0,0,0);
                background-color: rgba(0,0,0,0.4);
            }
            .modal-content {
                background-color: #fefefe;
                margin: 15% auto;
                padding: 20px;
                border: 1px solid #888;
                width: 80%;
            }
            .show {
                display: block;
            }
        `;
    }

    render() {
        return html`
            <div>
                <button @click="${this._backToDetail}">Back to Detail</button>
                <h2>Evolutions of ${this.pokemon.name}</h2>
                <ul>
                    ${this.pokemon.evolutions.map(evolution => html`
                        <li>
                            <img src="${evolution.image}" alt="${evolution.name}">
                            <span>${evolution.name} - Type: ${evolution.type}</span>
                            <button @click="${() => this._editEvolution(evolution)}">Edit</button>
                        </li>
                    `)}
                </ul>
                ${this._renderEditForm()}
                ${this._renderModal()}
            </div>
        `;
    }

    _renderEditForm() {
        return html`
            <div>
                <h3>Edit Evolution</h3>
                <form @submit="${this._submitForm}">
                    <label>
                        Name:
                        <input type="text" name="name" .value="${this.pokemon.evolutions[0].name}">
                    </label>
                    <label>
                        Type:
                        <input type="text" name="type" .value="${this.pokemon.evolutions[0].type}">
                    </label>
                    <label>
                        Image URL:
                        <input type="text" name="image" .value="${this.pokemon.evolutions[0].image}">
                    </label>
                    <label>
                        Repeated:
                        <input type="checkbox" name="repeated" @change="${this._toggleModal}">
                    </label>
                    <button type="submit">Save</button>
                </form>
            </div>
        `;
    }

    _renderModal() {
        return html`
            <div class="modal ${this.showModal ? 'show' : ''}">
                <div class="modal-content">
                    <span @click="${this._closeModal}">&times;</span>
                    <p>You can change the Pokémon at the nearest point.</p>
                </div>
            </div>
        `;
    }

    _editEvolution(evolution) {
        // Logic to populate the form with the selected evolution's data
    }

    _submitForm(event) {
        event.preventDefault();
        // Logic to handle form submission and update the evolution data
    }

    _toggleModal(event) {
        this.showModal = event.target.checked;
    }

    _closeModal() {
        this.showModal = false;
    }

    _backToDetail() {
        this.dispatchEvent(new CustomEvent('back-to-detail'));
    }
}

customElements.define('pokemon-evolution', PokemonEvolution);