// khai bao init
const dataMovie = firebase.firestore().collection("data_movie");
const dataReview = firebase.firestore().collection("review_moive");
//

const sliceMoive = document.querySelector(".center__movie-top");


/*
@param {render slice}
*/
async function renderSlice(){
    let respon = await dataMovie.get();
    for ( let data of respon.docs){
        sliceMoive.innerHTML += /*html*/`
                    <div class="movie__items">
                        <div class="movie__items-poster">
                            <a href=""> <img class="img-poster" src="${data.data().img}" alt="poster"></a>
                            <div class="movie__items-poster-info">
                                <a id="${data.data().name}" class="click">Chi tiết</a>
                                <a target="_blank" href="${data.data().trailer}">Trailer</a>
                                <p><b>Thời lượng</b> : ${data.data().time}</p>
                                <p><b>Thể Loại</b> : ${data.data().type}</p>
                            </div>
                        </div>
                        <div class="movie__items-detail">
                            <h2><p style="font-size:24px" class="name__movie">${data.data().name}</p></h2>
                            <p><b>Thời lượng</b> : ${data.data().time}</p>
                            <p><b>Ngày Khởi Chiếu</b> : ${data.data().date}</p>
                        </div>
                    </div>
        `
    }
    let nameMovie = [...document.querySelectorAll(".name__movie")];
    nameMovie.forEach(i => {
        i.addEventListener("click",() => {
            localStorage.setItem("idMovie", i.innerText);
            window.location.href = "/moviePage.html"
        })
    })
    let idNew = [...document.querySelectorAll(".click")];
    idNew.forEach(i => {
        i.addEventListener("click",() => {
            localStorage.setItem("idMovie", i.id);
            window.location.href = "/moviePage.html"
        })
    })
}
renderSlice();





const  reviewMovie = document.querySelector(".review_movie");
/**
 * @param render Review
 */
async function renderReview(){
    let respon = await dataReview.get();
    // tao random number
    let dataArr = [];
    for ( let data of respon.docs){
        dataArr.push(data.data());
    }
    let numberA = Math.floor(Math.random() * dataArr.length);
    let numberB = Math.floor(Math.random() * dataArr.length);
    let numberC = Math.floor(Math.random() * dataArr.length);
    let numberD = Math.floor(Math.random() * dataArr.length);

    if(numberA == numberB ) numberB++;
    if(numberA == numberC ) numberC++;
    if(numberA == numberD ) numberD++;
    if(numberB == numberC ) numberC++;
    if(numberB == numberD ) numberD++;
    if(numberC == numberD ) numberD++;
    if(numberB > dataArr.length) numberB -= 1;
    if(numberC > dataArr.length) numberC -= 1;
    if(numberD > dataArr.length) numberD = 1;
    if(numberA == numberB ) numberB++;
    if(numberA == numberC ) numberC++;
    if(numberA == numberD ) numberD++;
    if(numberB == numberC ) numberC++;
    if(numberB == numberD ) numberD++;
    if(numberC == numberD ) numberD++;
    if(numberB > dataArr.length) numberB -= 1;
    if(numberC > dataArr.length) numberC -= 1;
    if(numberD > dataArr.length) numberD = 1;
  

    reviewMovie.innerHTML = /*html*/`
    <div class="news__img">
    <div class="news__img-center position-relative" >
        <div class="img__center ">
            <img src="${dataArr[numberA].img}" alt="joker">
        </div>
        <div class="img__info position-absolute d-flex flex-column justify-content-around pl-4">
            <p>Review</p>
            <a href="/review.html" class="img__title">
                <span class="name__review">${dataArr[numberA].name} </span>
            </a>
            <div class="img__time w-50 d-flex flex-row justify-content-between">
                <span>by<b> : ${dataArr[numberA].by} / </b></span>
                <span><i class="far fa-clock"></i> ${dataArr[numberA].time}</span>
                <span>/ <i class="far fa-comment-dots"></i> ${dataArr[numberA].commentTotal.length}</span>
            </div>
        </div>
        <div class="blur w-100 position-absolute"></div>
    </div>
    <div class="news__img-footer d-flex">
        <div class="news__img-footer-total">
            <div><img src="${dataArr[numberB].img}" alt="" ></div>
            <span class="review">Review</span>
            <a href="/review.html" class="name__review">${dataArr[numberB].name}</a>

            <div class="news__img-footer-time">
                <span><i class="far fa-clock"></i> ${dataArr[numberB].time}</span>
                <span>/ <i class="far fa-comment-dots"></i> ${dataArr[numberB].commentTotal.length}</span>
            </div>
        </div>
        <div class="news__img-footer-total">
            <div><img src="${dataArr[numberC].img}" alt="" ></div>
            <span class="review">Review</span>
            <a href="/review.html" class="name__review">${dataArr[numberC].name}</a>

            <div class="news__img-footer-time">
                <span><i class="far fa-clock"></i> ${dataArr[numberC].time}</span>
                <span>/ <i class="far fa-comment-dots"></i> ${dataArr[numberC].commentTotal.length}</span>
            </div>
        </div>
        <div class="news__img-footer-total">
            <div><img src="${dataArr[numberD].img}" alt="" ></div>
            <span class="review">Review</span>
            <a href="/review.html" class="name__review">${dataArr[numberD].name}</a>
            <div class="news__img-footer-time">
                <span><i class="far fa-clock"></i> ${dataArr[numberD].time}</span>
                <span>/ <i class="far fa-comment-dots"></i> ${dataArr[numberD].commentTotal.length}</span>
            </div>
        </div>
        
    </div>
</div>
    `
}
renderReview();
function getDataLocal(){
    reviewMovie.addEventListener("click",(e) => {
        localStorage.setItem("idReview", e.target.innerText);
    })
}
getDataLocal();

let renderLeft = document.querySelector(".news__movie")
async function renderLeftReview(){
    let respon = await dataMovie.get();
    let dataLeft = [];
    for ( let data of respon.docs){
        dataLeft.push(data.data());
    }
    let numberA = Math.floor(Math.random() * dataLeft.length);
    let numberB = Math.floor(Math.random() * dataLeft.length);
    let numberC = Math.floor(Math.random() * dataLeft.length);
    let numberD = Math.floor(Math.random() * dataLeft.length);

    if(numberA == numberB ) numberB++;
    if(numberA == numberC ) numberC++;
    if(numberA == numberD ) numberD++;
    if(numberB == numberC ) numberC++;
    if(numberB == numberD ) numberD++;
    if(numberC == numberD ) numberD++;
    if(numberB > dataLeft.length) numberB -= 1;
    if(numberC > dataLeft.length) numberC -= 1;
    if(numberD > dataLeft.length) numberD = 1;
    if(numberA == numberB ) numberB++;
    if(numberA == numberC ) numberC++;
    if(numberA == numberD ) numberD++;
    if(numberB == numberC ) numberC++;
    if(numberB == numberD ) numberD++;
    if(numberC == numberD ) numberD++;
    if(numberB > dataLeft.length) numberB -= 1;
    if(numberC > dataLeft.length) numberC -= 1;
    if(numberD > dataLeft.length) numberD = 1;
  
    renderLeft.innerHTML = /*html*/ `
    <div class="news__moive-title">
                            <p>News Movie ToDay</p>
                        </div>
                        <div class="news__moive-title d-flex justify-content-between wow fadeInRightBig" data-wow-duration="0.5s" data-wow-offset="250">
                            <div class="news__moive-img">
                                <img src="${dataLeft[numberA].img}" alt="">
                            </div>
                            <div class="news_movie-img-title ">
                                <div><p class="title">${dataLeft[numberA].name}</p></div>
                                <div><p class="time pt-2"><i class="far fa-clock"></i>  ${dataLeft[numberA].date}</p></div>
                            </div>
                        </div>
                        <div class="news__moive-title d-flex justify-content-between wow fadeInRightBig " data-wow-duration="0.8s" data-wow-offset="200">
                            <div class="news__moive-img">
                                <img src="${dataLeft[numberB].img}" alt="">
                            </div>
                            <div class="news_movie-img-title ">
                                <div><p  class="title">${dataLeft[numberB].name}</p></div>
                                <div><p class="time pt-2"> <i class="far fa-clock"></i> ${dataLeft[numberB].date}</p></div>
                            </div>
                        </div>
                        <div class="news__moive-title d-flex justify-content-between wow fadeInRightBig" data-wow-duration="1.1s" data-wow-offset="150">
                            <div class="news__moive-img">
                                <img src="${dataLeft[numberC].img}" alt="">
                            </div>
                            <div class="news_movie-img-title ">
                                <div><p  class="title">${dataLeft[numberC].name}</p></div>
                                <div><p class="time pt-2"><i class="far fa-clock"></i> ${dataLeft[numberC].date}</p></div>
                            </div>
                        </div>
                        <div class="news__moive-title d-flex justify-content-between wow fadeInRightBig" data-wow-duration="1.4s" data-wow-offset="50">
                            <div class="news__moive-img">
                                <img src="${dataLeft[numberD].img}" alt="">
                            </div>
                            <div class="news_movie-img-title ">
                                <div><p  class="title">${dataLeft[numberD].name}</p></div>
                                <div><p class="time pt-2"><i class="far fa-clock"></i> ${dataLeft[numberD].date}</p></div>
                            </div>
                        </div>

    `
    let clickTitle = [...document.querySelectorAll(".title")];
    clickTitle.forEach(i => {
        i.addEventListener("click",() =>{
            localStorage.setItem("idMovie",i.innerText);
            console.log(i.innerText);
            window.location.href = "/moviePage.html"
        })
    })
}
renderLeftReview()