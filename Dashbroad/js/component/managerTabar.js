import { BaseComponent } from "../screens/BaseComponent.js";
let style = /*html*/ `
<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.container{
    width : 300px;
    height :100vh;
    background:green;
}
li{
    list-style-type: none;
    }
.manager{
    display :flex;
    flex-direction : column;
    justify-content:space-around;
    width :100%;
    height : 50%;
}
.manager__admin{
    display :flex;
    justify-content:space-around;
    align-items: center;
}
.infoUser{
    height : 50px;
    display :flex;
    flex-direction:column;
    justify-content:space-around;
}
.manager img {
    width : 50px;
    height :50px;
    border-radius : 50%;
}

.logo img{
    width : 150px;
}
.tab, .tab ul li {
    padding-top : 15px;
}
.tab::after{
    width : 10px;
    height : 10px;
    background-image:url("/img/icons/arrow-down.png");
    background:red;
}
.tab{
    font-size : 20px;
}
.tab ul li {
    font-size : 15px;
    padding-left : 50px;
    width : 100%;
    height : 100%;
}

</style>
`;

class ManagerTabbar extends BaseComponent {
  constructor() {
    super();
  }
  render() {
    let user = JSON.parse(localStorage.getItem("user"));

    this._shadowRoot.innerHTML = /*html */ `
        ${style}
        <div class="container">
            <div  class="logo">
                <img src="/img/logo/l.png" alt="">
            </div>
            <div>
            <ul class="manager">
            <li class="manager__admin">
                <div><img src="${user.avatar}" alt=""></div>
                <div class="infoUser">
                    <p><b>${user.name}</b></p>
                    <p>Project Manager</p>
                </div>
            </li>
            <li class="tab">Dashboard
            </li>
            <li class="tab">
                <div class="ql-icon">
                    Quản lí bài viết
                    <span class="icon">
                    <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                    </svg>
                    </span>
                </div>
                <ul>
                    <li class="total">Tổng Hợp</li>
                    <li class="add">Thêm Bài Viết</li>
                    <li class="">Update Bài Viết</li>
                    <li class="delete">Xóa Bài Viết</li>
                </ul>             
            </li>
            <li class="tab">Quản Lí Users 
                <span class="icon">
                    <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                    </svg></span>
                <ul>
                    <li>Users List</li>
                    <li>Update user</li>
                    <li>Xóa User</li>
                </ul>
            </li>
            <li class="tab">Quản Lí Tương Tác
                <span class="icon">
                    <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                    </svg>
                </span>
                <ul>
                    <li>Tổng Hợp</li>
                </ul>
            </li>
            <li class="tab">Quản Lí ADMIN
                <span class="icon">
                    <svg width="1.25em" height="1.25em" viewBox="0 0 16 16" class="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
                    </svg>
                </span>
                <ul>
                    <li>Tổng hợp</li>
                    <li>Update ADMIN</li>
                    <li>Thêm ADMIN</li>
                    <li>XÓA ADMIN</li>
                </ul>
            </li>
        </ul>
            </div>
        </div>
        `;
  }
}

window.customElements.define("manager-tabbar", ManagerTabbar);
