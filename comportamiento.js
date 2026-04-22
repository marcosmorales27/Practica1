// paso 1 creo un custom element 
class TarjetaUsuario extends HTMLElement {
    constructor() {
        super();
        //uso el shadow DOM 
        this.attachShadow({ mode: 'open' });

        const template = document.getElementById('tarjeta-usuario'); 
        if (template){
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }
    //paso 2 uso metodo de ciclo de vida para el custom element 
    connectedCallback() {
        // manejo de HTML dentro del template para mostrar la foto del usuario
        const urlFoto = this.getAttribute('foto');
        const imgElement = this.shadowRoot.getElementById('foto-usuario');
        
        if (urlFoto && imgElement) {
            imgElement.src = urlFoto;
        } else if (imgElement) {
            imgElement.src = 'https://via.placeholder.com/300x150?text=Sin+Foto';
        }
    }
}

customElements.define('tarjeta-usuario', TarjetaUsuario);
