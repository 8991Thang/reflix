import {BaseComponent} from '../screens/BaseComponent.js'
const style = /*html*/ `
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
}
.container__suggest{
    margin-top:100px;
    margin-bottom:40px;
    width: 100%;
    background-color: #081b27;
    display:flex;
    justify-content: center;
}
.item img {
    width:300px;
    height: 154px;
}
.item{
    margin-bottom: 40px;
    margin-top: 10px;
    display:inline-block;
}
.item p {
    width:300px;
    margin:0;
    text-align:left;
    margin-top: 20px;
    color: #f29438;
}
.suggest__body{
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    flex-wrap:wrap;
}
.suggest{
    background:white;
    width:1106px;
    display:flex;
    align-items: center;
    justify-content: center;
}
.suggest__title p{
    margin:0;
    margin: 15px 0;
    text-transform: uppercase;
    color: #eb1689;
    font-size:25px;
    font-weight: 500;
}
.suggest__size{
    width:95%;
    height:95%;
}
.suggest__text{
    cursor: pointer;
}
.suggest__text:hover{
    color: #eb1689;
}
</style>
`
class SuggestReview extends BaseComponent {
    constructor(){
        super();
    }
    render(){
        this._shadowRoot.innerHTML =/*html */ `
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet">
        ${style}

        <div class="container__suggest">
            <div class="suggest">
                <div class="suggest__size">
                    <div class="suggest__title">
                        <p>Bài Viết Mới</p>
                    </div>
                    <div class="suggest__body">
                        <div class="item">
                            <img src="/img/background/1920x1080-11.jpg" alt="">
                            <p>Name </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        this.renderSuggest();
    }
    async renderSuggest(){
        let data = [];
        let db = await firebase.firestore().collection("review_moive").get();
        for ( let doc of db.docs){
            data.push(doc.data())
        }
        let oneRandom = Math.floor(Math.random()* data.length);
        let twoRandom = Math.floor(Math.random()* data.length);
        let threeRandom = Math.floor(Math.random()* data.length);
        let fourRandom = Math.floor(Math.random()* data.length);
        let fiveRandom = Math.floor(Math.random()* data.length);
        let sixRandom = Math.floor(Math.random()* data.length);
        this._shadowRoot.querySelector(".suggest__body").innerHTML = /*html*/`
        <div class="item">
            <img src="${data[oneRandom].imgblur}" alt="">
            <p class="suggest__text">${data[oneRandom].name}</p>
        </div>
        <div class="item">
            <img src="${data[twoRandom].imgblur}" alt="">
            <p class="suggest__text">${data[twoRandom].name}</p>
        </div>
        <div class="item">
            <img src="${data[threeRandom].imgblur}" alt="">
            <p class="suggest__text">${data[threeRandom].name}</p>
        </div>
        <div class="item">
            <img src="${data[fourRandom].imgblur}" alt="">
            <p class="suggest__text">${data[fourRandom].name}</p>
        </div>
        <div class="item">
            <img src="${data[fiveRandom].imgblur}" alt="">
            <p class="suggest__text">${data[fiveRandom].name}</p>
        </div>
        <div class="item">
            <img src="${data[sixRandom].imgblur}" alt="">
            <p class="suggest__text">${data[sixRandom].name}</p>
        </div>
        `

        let dataClick = [...this._shadowRoot.querySelectorAll(".suggest__text")];
        for ( let i = 0 ; i < dataClick.length; i++){
            dataClick[i].addEventListener("click", () => {
                localStorage.setItem("idReview",dataClick[i].innerText);
                window.location.href = "/review.html"
            })
        }
    }
}
window.customElements.define("suggest-review", SuggestReview);