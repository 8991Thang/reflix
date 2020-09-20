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
    let number = Math.floor(Math.random() * dataArr.length);
    console.log(number)
    console.log(dataArr.length)
    for ( let data of respon.docs){
        dataArr.push(data.data());
    }
    reviewMovie.innerHTML = /*html*/`
    <div class="news__img">
    <div class="news__img-center position-relative" >
        <div class="img__center ">
            <img src="${dataArr[number].img}" alt="joker">
        </div>
        <div class="img__info position-absolute d-flex flex-column justify-content-around pl-4">
            <p>Review</p>
            <a href="#" class="img__title">
                <span>${dataArr[number].name} </span>
            </a>
            <div class="img__time w-50 d-flex flex-row justify-content-between">
                <span>by<b> : ${dataArr[number].by} / </b></span>
                <span><i class="far fa-clock"></i> ${dataArr[number].time}</span>
                <span>/ <i class="far fa-comment-dots"></i> 30</span>
            </div>
        </div>
        <div class="blur w-100 position-absolute"></div>
    </div>
    <div class="news__img-footer d-flex">
        <div class="news__img-footer-total">
            <div><img src="https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/222379/SHOOTER%20Hi-Res.jpg" alt="" ></div>
            <span class="review">Review</span>
            <p>Jalopy developer is making a game where you 'build stuff...</p>
            <div class="news__img-footer-time">
                <span><i class="far fa-clock"></i> 20/2/2020</span>
                <span>/ <i class="far fa-comment-dots"></i> 20</span>
            </div>
        </div>
        <div class="news__img-footer-total">
            <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqEi2E8K40yzhOfbltjfIu0dhFKwb0wmTfEA&usqp=CAU" alt="" ></div>
            <span class="review">Review</span>
            <p>Jalopy developer is making a game where you 'build stuff...</p>
            <div class="news__img-footer-time">
                <span><i class="far fa-clock"></i> 20/2/2020</span>
                <span>/ <i class="far fa-comment-dots"></i> 20</span>
            </div>
        </div>
        <div class="news__img-footer-total">
            <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTax3fAWIfYa_8gNZwbwxOUHzxarTzl_5lDHw&usqp=CAU" alt="" ></div>
            <span class="review">Review</span>
            <p>Jalopy developer is making a game where you 'build stuff...</p>
            <div class="news__img-footer-time">
                <span><i class="far fa-clock"></i> 20/2/2020</span>
                <span>/ <i class="far fa-comment-dots"></i> 20</span>
            </div>
        </div>
    </div>
</div>
    `
    console.log(dataArr)
}

renderReview();