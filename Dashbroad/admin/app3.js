
function rederect(){
    window.location.href="/Dashbroad/admin/newReview.html";
  }
  
// render data card review movie
async function renderCardMovie(){
    let db = await firebase.firestore().collection("review_moive").get();
    let collectionCard = document.querySelector(".card__collection");
    for (let doc of db.docs){
        collectionCard.innerHTML +=/*html*/`
        <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${doc.data().img}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${doc.data().name}</h5>
                      <p class="card-text">${doc.data().content}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Đạo Diễn : ${doc.data().owner}</li>
                      <li class="list-group-item">Diễn Viên : ${doc.data().cast}</li>
                      <li class="list-group-item">Ngày Đăng : ${doc.data().time}</li>
                    </ul>
                    <div class="card-body btn">
                        <button class="btn btn-danger delete" onclick="deleteCard(this)">Xoá</button>
                        <button class="btn btn-info"> Chỉnh Sửa</button>
                        
                    </div>
                  </div>
        
        `
    }
}
renderCardMovie();

function deleteCard(e){
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
    console.log(e.parentNode.parentNode.content);
    
}
deleteCard();