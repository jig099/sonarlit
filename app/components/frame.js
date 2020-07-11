let tmpl= `
<template id='mainTmpl'>
 <style>
        #level1Container{
            display:flex;
            flex-direction: row;
            height:900px
        }

        #sideBar{
            display:flex;
            flex:1;
            flex-direction:column;
            border-style:dashed;
            border-width:1px;
            border-color:black;
            justify-content: center;
            align-items:stretch;
            background-color: #F0F3BD;
        }

        #mainArea{
            flex:4;
        }

        body > *{
            border-style:dashed;
            border-width:1px;
            border-color:black;
        }

        #sideBar > *{
            flex:1;
            align-items:center;
            padding:auto;
            margin:auto
        }

        #sideBar > *:hover{
            flex:1;
            background-color: aliceblue;
            padding:auto;
        }


        #profilePicture{
            flex:3
        }

        #blank{
            flex:5
        }


    </style>
</head>
<body>
    <div id="level1Container">
        <div id="sideBar">
            <div id="profilePicture">
                <img src="../asset/pic/powell.jpg">
            </div>
            <div id="visitorAnalytics">
                Visitor Analytics
            </div>
            <div id="visitorFeedback">
                Visitor Feedback
            </div>
            <div id="performanceAnalytics">
                Performance Analytics
            </div>
            <div id="userManagement">
                User Management
            </div>
            <div id="setting">
                Setting
            </div>
            <div id="blank">

            </div>
        </div>
        <div id="mainArea">
            <slot name="mainArea">
            </slot>
        </div>

    </div>
</template>
`;

class MainFrame extends HTMLElement{
    constructor(){
        super();
        this.insertAdjacentHTML('beforeend', tmpl);
        let template = document.getElementById('mainTmpl');
        let templateContent = template.content;

        const shadowRoot = this.attachShadow({mode:'open'})
            .appendChild(templateContent.cloneNode(true));
    }
    set mainArea(val){
        // use this method to update the content of the main area by doing frame.mainArea = (HTML code in string)
        let mainArea_el = this.querySelector('#mainArea');
        mainArea_el.innerHTML = val;
    }
}
customElements.define('main-frame', MainFrame);
<<<<<<< HEAD
=======

>>>>>>> 4f9384f0ed272f1b5853aa6a0359f4ef0ff9e8f4
