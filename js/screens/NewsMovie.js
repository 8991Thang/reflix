import {BaseComponent} from '../screens/BaseComponent.js';
const style = /*html */ `
    <style>
        *{
            padding: 0;
            margin:0;
            box-sizing: border-box;
        }
        .container{
            width: 100%;
            height: 100%;
            padding-top:55px;
            padding-bottom: 50px;
            background-image: url(/img/background/luoi.png);
            background-color: #cf256f;
        }
        a {
            color: #ffffff;
            text-decoration: none;
            
        }
        a:hover {
            color: #F13847;
            transition: 0.3s;
            text-decoration: underline;
        }
        .news-container{
            width: 1170px;
            margin: auto;
            <!-- background-color: #CCC1AE; -->
            
        }
        .news-container-header{
            font-size: 20px;
            font-style: italic;
            margin-bottom: 10px;
            display: flex;
            
            
        }
        .news-container-header :hover {
            color: #ffc107;
            transition: 0.3s;
            text-decoration: underline;
        }
        
        #paral{
            display:flex;
            margin-top: 5px;   
            margin-right: 5px;   
            width: 14px;
            height: 17px;
            background: #ffc107;
            -webkit-transform: skew(-20deg);
            -moz-transform: skew(-20deg);
            -o-transform: skew(-20deg);
            transform: skew(-20deg);
        }
       
        .news-container-content{
            display: flex;
            flex-direction: column;
        }
        .news-1, .news-2{
            position: relative;
            transition: all .2s ease-in-out;
        }
        .title{
            font-size: 20px;
            line-height: 10px;
            color: #ffffff;
            font-weight: bold;
        }
        .date-modified {
            color: white;
            font-size: 13px;
        }
        i {
            margin-right: 2px;
        }
        
        .news-container-1{
            display: flex;
            justify-content: space-between;
            
        }
        .news-1 img {
            width: 570px;
            height: 384px;
            border-radius: 5px;  
        }
        .news-1 .news-1-img {
            position: relative;
            overflow: hidden;
        }
        .news-1 .news-1-img img {
            max-width: 100%;
            transition: transform 2s;
        }
        .news-1:hover .news-1-img img {
            transform: scale(1.2)
        }
        .news-1-info, .news-2-info{
            position: absolute;
            bottom: 10px;
            left: 5px;
            
        }
        .news-container-2 {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
        }
        .news-2 img {
            width: 377px;
            height: 252px;
            border-radius: 5px;
        }
        .news-2 .news-2-img {
            position: relative;
            overflow: hidden;
        }
        .news-2 .news-2-img img {
            max-width: 100%;
            transition: transform 2s;
        }
        .news-2:hover .news-2-img img {
            transform: scale(1.2)
        }
        


    </style>
`;
class NewsMovie extends BaseComponent {
    constructor() {
        super();
        this.props ={

        }
    }
    
    static get observedAttributes() {
        return [];
    }

    render() {
        this._shadowRoot.innerHTML = /*html */ `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            ${style}
            <div class="container">

                <div class="news-container">

                    <div class="news-container-header">
                        <div id="paral"></div>
                        <a href="#">ACTRESS UPDATE</a>
                    </div>
                
                    <div div class="news-container-content">
                
                        <div class="news-container-1">
                            <div class="news-1">
                                <div class="news-1-img">
                                    <img src="https://znews-photo.zadn.vn/w480/Uploaded/neg_yslewlx/2020_08_29/bpppp_1.jpg" alt="">
                                </div>
                                <div class="news-1-info">
                                    <a href="#" class="title">Ngôi sao Black Panther qua đời vì ung thư đại tràng</a>
                                    
                                    <div class="date-modified">
                                    <i class="fa fa-clock-o"></i>10/10/2020
                                    </div>
                                </div>
                            </div>
                            <div class="news-1">
                                <div class="news-1-img">
                                    <img src="https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_05/1_K2LHKSArFnasf_jnacyQnQ_1.jpeg" alt="">
                                </div>
                                <div class="news-1-info">
                                    <a href="" class="title">‘Emily in Paris’ - giấc mơ màu hồng của mọi cô gái</a>
                                    <div class="date-modified">
                                    <i class="fa fa-clock-o"></i>10/10/2020
                                    </div>
                                </div>
                            </div>
                        </div>
                
                        <div class="news-container-2">
                            <div class="news-2">
                                <div class="news-2-img">
                                    <img src="https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_10_05/AnneHathawayHotwallpaperhd.jpg" alt="">
                                </div>
                                <div class="news-2-info">
                                    <a href="" class="title">Quá khứ bị ghét bỏ của Anne Hathaway</a>
                                    <div class="date-modified">
                                    <i class="fa fa-clock-o"></i>10/10/2020
                                    </div>
                                </div>
                            </div>
                            <div class="news-2">
                                <div class="news-2-img">
                                    <img src="https://znews-photo.zadn.vn/w480/Uploaded/ngogtn/2020_09_30/MV5BMzQ4NTY5MjEtZmYwMi00YTcwLWJiNzMtZjJhMjI4MmY4OGJkXkEyXkFqcGdeQXVyOTc5MDI5NjE_._V1_SX1777_CR0_0_1777_928_AL__1.jpg" alt="">
                                </div>
                                <div class="news-2-info">
                                    <a href="" class="title">Những vai diễn thách thức sao nhí</a>
                                    <div class="date-modified">
                                    <i class="fa fa-clock-o"></i>10/10/2020
                                    </div>
                                </div>
                            </div>
                            <div class="news-2">
                                <div class="news-2-img">
                                    <img src="https://znews-photo.zadn.vn/w480/Uploaded/aobovhp/2020_10_06/sherlock.jpg" alt="">
                                </div>
                                <div class="news-2-info">
                                    <a href="" class="title">Robert Downey Jr. muốn xây dựng vũ trụ điện ảnh với Sherlock Holmes</a>
                                    <div class="date-modified">
                                    <i class="fa fa-clock-o"></i>10/10/2020
                                    </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>

                </div>
        `;
    }
}

window.customElements.define('news-movie', NewsMovie)