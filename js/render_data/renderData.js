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
                                <a href="">Chi tiết</a>
                                <a href="${data.data().trailer}">Trailer</a>
                                <p><b>Thời lượng</b> : ${data.data().time}</p>
                                <p><b>Thể Loại</b> : ${data.data().type}</p>
                            </div>
                        </div>
                        <div class="movie__items-detail">
                            <h2><a href="">${data.data().name}</a></h2>
                        </div>
                    </div>
        `
    }
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
    if(numberB > dataArr.length) numberB = 1;
    if(numberC > dataArr.length) numberC = 0;
    if(numberD > dataArr.length) numberD = 2;
  

    reviewMovie.innerHTML = /*html*/`
    <div class="news__img">
    <div class="news__img-center position-relative" >
        <div class="img__center ">
            <img src="${dataArr[numberA].img}" alt="joker">
        </div>
        <div class="img__info position-absolute d-flex flex-column justify-content-around pl-4">
            <p>Review</p>
            <a href="#" class="img__title">
                <span>${dataArr[numberA].name} </span>
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
            <p>${dataArr[numberB].name}</p>
            <div class="news__img-footer-time">
                <span><i class="far fa-clock"></i> ${dataArr[numberB].time}</span>
                <span>/ <i class="far fa-comment-dots"></i> ${dataArr[numberB].commentTotal.length}</span>
            </div>
        </div>
        <div class="news__img-footer-total">
            <div><img src="${dataArr[numberC].img}" alt="" ></div>
            <span class="review">Review</span>
            <p>${dataArr[numberC].name}</p>
            <div class="news__img-footer-time">
                <span><i class="far fa-clock"></i> ${dataArr[numberC].time}</span>
                <span>/ <i class="far fa-comment-dots"></i> ${dataArr[numberC].commentTotal.length}</span>
            </div>
        </div>
        <div class="news__img-footer-total">
            <div><img src="${dataArr[numberD].img}" alt="" ></div>
            <span class="review">Review</span>
            <p>${dataArr[numberD].name}</p>
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


