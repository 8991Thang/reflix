
function rederect(){
    window.location.href="/Dashbroad/admin/newReview.html";
  }
  
// render data card review movie
async function renderCardMovie(){
    let db = await firebase.firestore().collection("review_moive").get();
    let collectionCard = document.querySelector(".card__collection");
    collectionCard.innerHTML = '';
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
                        <button id="${doc.data().name}" class="btn btn-danger delete"onclick="deleteCard(this)" >Xoá</button>
                        <button class="btn btn-info"> Chỉnh Sửa</button>
                    </div>
                  </div>
        
        `
    }
}
renderCardMovie();

async function deleteCard(event){
  var r = confirm("Bạn có chắc chắn muốn xóa bài viết này không?!");
  if (r == true) {
    let db = await firebase.firestore()
    .collection("review_moive")
    .where("name","==",event.id)
    .get()
    .then( async (x) => {
      let idDelete = x.docs[0].id;
      await firebase.firestore().collection("review_moive").doc(idDelete).delete();
      alert("Bạn đã xóa bài viết thành công!! ")
    })
    .then(x => {
      renderCardMovie();
    })
    .catch(function(){
      alert(Error)
    })
  } else {
    return;
  }   
}


//  function deleteCard(){
//   let btnDelete = [...document.querySelectorAll(".btn-danger")];
// console.log(btnDelete)
//   btnDelete.forEach(item => {
//     item.addEventListener("click",() => {
//       console.log(item.id)
//     })
//   })

// }

// deleteCard();