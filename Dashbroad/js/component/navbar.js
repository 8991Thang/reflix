import {BaseComponent}  from '../screens/BaseComponent.js'

let style = /*html*/ `
<style>
li{
    list-style: none;
}
.user__info img{
    width: 50px;
    height : 50px;
    border-radius : 50%;
}
.width {
    width : 400px;
    margin-right :200px;
    position: relative;
}
.down__list img {
    width :10px;
    height :9px;
    cursor: pointer;
}
.down__info{
    padding: 0;
    box-shadow: 0 0 10px #aaaaaaaa;
    position: absolute;
    width: 235px;
    height: 100px;
    right: 177px;
    text-align: left;
    opacity:0;
    transition: all 0.5s ease;
    top: 120px;
}
.show{
    top: 65px;
opacity:1;
}

.down__info li {
    line-height : 50px;
    height : 50%;
    width : 100%;
    padding-left :3rem;
    cursor: pointer;
    
}
.down__info li:first-child {
    border-bottom : 1.5px solid #aaaaaaaa;

}
.name__user{
    padding:0;
    margin:0;
    display:flex;
    align-items : center;
    margin-right: 3rem;
}
.list-down{
    cursor: pointer;
    font-size:40px;
}
.nav-search{
    width: 450px;
    display:flex;
    justify-content:space-around;
}
.icon-search{
    font-size: 20px;
}
.input{
    border:none;
    background-color:transparent;
    outline:none !important;
    padding-left: 30px;
}
.nav-profile-img{
    position:relative;
}
.online{
    width : 11px;
    height: 11px;
    background: #1bcfb4;
    border-radius: 50%;
    position:absolute;
    top: 61%;
    right: -7%;
    border: 1px solid white;
}
}
</style>
`


class NavBar extends BaseComponent{
    constructor(){
        super();
    }
    render(){
        let user = JSON.parse(localStorage.getItem('user'));

        this.shadowRoot.innerHTML = /*html */`
        <!-- Bootstrap CSS only -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <!--  CSS only -->
        ${style}

        <!-- HTML -->

    <nav class="navbar navbar-light bg-light justify-content-between flex-row-reverse ">
        <div class="user__info d-flex align-items-center justify-content-around width">
                <div class="nav-profile-img"> 
                    <img src="${user.avatar}" alt="">
                    <span class="online"></span>
                </div>
                <ul class="d-flex name__user">
                    <li class="navbar-brand">${user.name}
                        <ul class="down__info d-flex flex-column justify-content-around">
                            <li>Chang Acount</li>
                            <li> <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-box-arrow-in-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                            <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                          </svg> Signout </li>
                        </ul>
                    </li>   
                    <span class="down__list"><img  src="/img/icons/arrow-down.png" alt=""></span>
                </ul>
                <div>
                    <ul>
                        <li>
                            <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-bell" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z"/>
                            <path fill-rule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                            </svg>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </li>    
                    </ul>
                </div>
        </div>
        <form class="form-inline nav-search">
            <div class="list-down">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
            <div class="nar-input d-flex align-items-center">
                <div class="icon-search">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    </svg>
                </div>
                <input class="input mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            </div>
        </form>
    </nav>
        `



        // show notification user
        let downList = this._shadowRoot.querySelector(".name__user");
        let notification = this._shadowRoot.querySelector(".down__info");
        
        downList.addEventListener("click",() => {

            console.log(notification)
            notification.classList.toggle("show")
        })
        
    }
}
window.customElements.define("nav-bar",NavBar);