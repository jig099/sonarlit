/*
This is a web component for graphArea.

To use this component, first call 

    <script type="module" src="[pathToThisFile]">

to import this file into the html file, then inject all images wanted to show on the page, specify the slot attribute like the following:

    <graph-area>
        <img src="..." slot="graphArea">
    </graph-area>
*/
let tmpl= `
<template id='mainTmpl'>
    <style>
        #graphArea{
            display:grid;
            grid-template-columns:repeat(3, 1fr);
            grid-auto-rows:auto;
            grid-gap: 20px;
        }
        .block{
            background-color:aqua;
        }

        .block > img{
            margin:auto;
            display: block;
        }
    </style>
    <slot id="graphArea" name="graphArea">
    </slot>

</template>
`;

class GraphArea extends HTMLElement{
    constructor(){
        super();
        this.insertAdjacentHTML('beforeend', tmpl);
        let template = document.getElementById('mainTmpl');
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({mode:'open'})
            .appendChild(templateContent.cloneNode(true));
    }

    set colCnt(val){
        let graphArea_el = document.getElementById('graphArea');
        console.log(graphArea_el);
    }

}
customElements.define('graph-area', GraphArea);
