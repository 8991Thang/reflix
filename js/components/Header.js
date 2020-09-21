import {BaseComponent} from "../screens/BaseComponent.js";

const style = /*html*/`
<style>
*{
    font-family: 'Roboto', sans-serif;
	font-smoothing: antialiased;
    margin : 0;
    padding : 0;
    box-sizing : border-box;
}
.header-section {
	position: absolute;
	width: 100%;
	left: 0;
	top: 0;
	z-index: 99;
	padding: 15px 15px 0;
}

.header-warp {
	max-width: 1496px;
	margin: 0 auto;
}

.header-social p,
.footer-social p,
.geme-social-share p {
	display: inline-block;
	color: #9190a5;
	font-size: 16px;
	padding-top: 4px;
}

.header-social a img,
.footer-social a img,
.geme-social-share a {
	display: inline-flex;
	width: 32px;
	height: 32px;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	color: #fff;
	font-size: 12px;
	margin-left: 13px;
	-webkit-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
}

.header-social a img:hover,
.footer-social a img:hover,
.geme-social-share a:hover {
	background: red;
}
.sticky{
	position:sticky !important;
	top: 0 !important;
}
.header-bar-warp {
	background: #081624;
	padding: 39px 40px 0px;
	box-shadow: 0 0 9px 3px rgba(255, 36, 0, 0.2);
}

.site-logo {
    float: left;
}
.site-logo > img {
    width : 150px;
}

.user-panel {
	float: right;
	font-size: 16px;
	font-weight: 500;
	color: #fff;
	padding-top: 3px;
}

.user-panel a {
    color: #fff;
    font-family: 'Roboto', sans-serif;
}

.user-panel a:hover {
	color: red;
}

.main-menu {
	list-style: none;
	text-align: center;
	padding-top: 3px;
}

.main-menu li {
	display: inline-block;
	position: relative;
}

.main-menu li a {
	text-transform: uppercase;
	letter-spacing: 1.5px;
    text-decoration: none;
    display: block;
	font-size: 16px;
	font-weight: 500;
	color: #fff;
	margin-right: 40px;
	padding-bottom: 28px;
	position: relative;
	padding-right: 20px;
	transition: all 0.5s ease;
}

.arrow-down:after {
	position: absolute;
	content: "";
	width: 20px;
	height: 20px;
	right: 0;
	top: 1px;
	background-image: url("../img/icons/arrow-down.png");
	background-repeat: no-repeat;
	background-position: right center;
}

.main-menu li a i {
	color: #928d92;
}

.main-menu li a:hover {
	color: red;
	transform:scale(1.2)
}


.main-menu li a:hover i {
	color: red;
}

.main-menu li:hover .sub-menu {
	visibility: visible;
	opacity: 1;
	margin-top: 0;
}

.main-menu li:hover>a {
	color: red;
}


.after{
    cursor: pointer;
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    right: -21px;
    top: 30px;
    background-image: url(../img/icons/arrow-down.png);
    background-repeat: no-repeat;
	background-position: right center;
	
}

.main-menu li .sub-menu {
	position: absolute;
	list-style: none;
	text-align: left;
	width: 830px;
	left: 0;
	top: 133%;
	visibility: hidden;
	opacity: 0;
	margin-top: 50px;
	background: #fff;
	z-index: 99;
	transition: all 0.4s ease-in-out;
    box-shadow: 0px 0px 10px black;	
	display: flex;
	flex-direction: row;
    justify-content: space-between;
}

.main-menu li .sub-menu li {
    padding-top: 10px;
    cursor: pointer;
	display: block;
}
.sub-menu{
	border-radius:8px;
}
.sub-menu li{
	text-align: center;
	line-height: 50px;
	height: 70px;
	width : 120px;
}
.sub-menu li:hover{
	
    color : white;
	background-color : rgb(105,105,105) !important;
}

.main-menu li .sub-menu li a {
	display: block;
	color: #000;
	margin-right: 0;
	padding: 8px 30px;
}

.main-menu li .sub-menu li a:after {
	display: none;
}

.main-menu li .sub-menu li a:hover {
	color: red;
}

.slicknav_menu {
	display: none;
}
.user{
	font-weight:700;
	right: 33px;
    top: 13px;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.user img{
	height: 60px;
	border-radius:50%;
	width:60px;
}
.user div {
	padding-bottom: 8px;
}
.user-menu{
	margin-top:10px;
	list-style: none;
	float:left;
	position: absolute;
	text-align : center;
	right: -15px;
	top : 170%;
	background : #302525;
	border : 1.5px solid white;
	border-radius : 10px;
	opacity : 0;
	transition : all 0.9s ease;
}
.user-menu li:hover{
	background:black;
}
.user-menu li:first-child{
	background : blue;
	border:none;
	border-radius : 10px 10px 0 0;
}
.user-menu li:first-child:hover{
	background : #003366
}
.show{
	top : 100%;
	opacity : 1;
	transform : 
}
.rotate{
	transform:rotateX(180deg)

}	
.openModal{
	cursor:pointer;
}
.openModal li {
	list-style-type : none;
}
.user-menu li:last-child{
	border-radius : 0 0 10px 10px;
	background : #FF4646;
}
.user-menu li:last-child:hover{
	background : #A80000 !important;
}
.user-menu li {
	cursor : pointer;
	font-size:15px;
	border-top : 1px solid pink;
	padding-bottom : 17px;
	display:flex;
	justify-content:center;
	align-items: center;
	height : 90px;
	width: 105px;
	padding-right: 10px;
	padding-top:30px;
	display: block;
}

</style>
`
class Header extends BaseComponent {
    constructor(){
        super();
    }

    render(){
		const data = localStorage.getItem("user");
		const dataConvert = JSON.parse(data);
			if(data){
				if(dataConvert.admin){
					var admin = `<li>Manager</li>`
				}else{
					var admin = '';
				}
				var	dataUser = `
				<div class="user">
					<div><img src="${dataConvert.avatar}" alt=""></div>
					<ul class="openModal">
						<li>${dataConvert.name}
					<ul class="user-menu">
						<li>Hồ Sơ</li>
						${admin}
						<li>Chỉnh Sửa</li>
						<li class="log-out">Đăng Xuất</li>
						</ul>	
						</li>
					</ul>
					<div class="after"></div>
				</div>
				`
			}
			var userName = data ? `${dataUser}` : ` <a href="/login.index.html">Login</a> / <a href="/register.index.html">Register</a>`
			
        this._shadowRoot.innerHTML = /*html*/`
        <!-- Page Preloder -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

    ${style} 
	<div id="preloder">
    <div class="loader"></div>
</div>

<!-- Header section -->
<header class="header-section">
    <div class="header-warp">
        <div class="header-social d-flex justify-content-end">
            <p>Follow us:</p>
            <a href="#"><img src="https://img.icons8.com/plasticine/2x/facebook-new.png" alt="fb" srcset=""></a>
            <a href="#"><img style="width : 30px;height:29px"  src="https://i.pinimg.com/originals/36/03/d6/3603d632370eb53f2fd0e59ba7de236b.png" alt="tw"></a>
            <a href="#"><img src="https://img.icons8.com/plasticine/2x/google-logo.png" alt="" srcset=""></a>
        </div>
        <div class="sticky header-bar-warp d-flex">
            <a href="" class="site-logo">
                <img src="/img/logo/l.png" alt="reflix">
            </a>
            <nav class="top-nav-area w-100">
				<div class="user-panel">
                   ${userName}
                </div>
                <!-- Menu -->
                <ul class="main-menu primary-menu">
                    <li><a href="">Trang Chủ </a></li>
                    <li><a href="" class="arrow-down">Review Phim</a></li>
                    <li><a href="" class="arrow-down">Thể Loại</a>
                        <ul class="sub-menu">
                            <li class="type-movie" >Hành Động</li>
                            <li class="type-movie">Tình Cảm</li>
                            <li class="type-movie">Viễn Tưởng</li>
                            <li class="type-movie">Hoạt Hình</li>
                            <li class="type-movie">Hài Hước</li>
                            <li class="type-movie">Kinh Dị</li>
                            <li class="type-movie">Tội Phạm</li>
                        </ul>
                    </li>
					<li><a href="" class="arrow-down">Bảng Xếp Hạng Điểm IMDB</a>
						<ul class="sub-menu" style="width : 400px" >
							<li>Năm 2018</li>
							<li>Năm 2019</li>
							<li>Năm 2020</li>
						</ul>
					</li>
                    <li><a href="contact.html">Giới Thiệu Reflix</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>
`
			//loc type movie
				this.typeMovie();
			// loc diem movie

			// dang xuat tai khoan;
			this.logOut();
			//show menu user 
			this.showUserMenu();
		
	}
	
	typeMovie(){
		let dataMovie = firebase.firestore().collection("data_movie");
		const subMenu = this._shadowRoot.querySelector(".sub-menu");

		subMenu.addEventListener("click", async (event)=>{
			const typeData = event.target.innerText;
			localStorage.setItem('type',typeData);
		})
	}
	logOut(){
		const data = localStorage.getItem("user");

		if(data){
			let out = this._shadowRoot.querySelector(".log-out");
			out.addEventListener("click", (event)=>{
				var r = confirm("Bạn thực sự muốn đăng xuất ???");
				if (r == true) {
					localStorage.removeItem("user")
					location.reload();
				} else {
					return;
				}
			})
		}else{
			return;
		}
	}
	showUserMenu(){
		const data = localStorage.getItem("user");
		if(data){

			let show = this._shadowRoot.querySelector(".after");
			let userMenu = this._shadowRoot.querySelector(".user-menu");
			show.addEventListener("click",()  => {
				userMenu.classList.toggle("show");
				show.classList.toggle("rotate")
			})
		}

	}
}

window.customElements.define("header-component", Header);