
window.onload= function(){
    var w = window.screen.width;
    var h = window.screen.height;
    var container = this.document.getElementsByClassName("container")[0];
    container.style.width = w;
    container.style.height = h;

    //nav 相关
    var navItemTitles = document.getElementsByClassName("nav-item-title");
    var navDropMenu = document.getElementsByClassName("nav-drop-menu");
    for(var i = 0; i < navItemTitles.length; i++){
        console.log(navItemTitles[i].value);
        navItemTitles[i].addEventListener('mouseover', function(){
            navDropMenu[0].style.height = '201px';
            navDropMenu[0].style.borderTop = '1px solid #e0e0e0';
            navDropMenu[0].style.borderBottom = '1px solid #e0e0e0';
        })
        navItemTitles[i].addEventListener('mouseout', function(){
            navDropMenu[0].style.height = '0';
            navDropMenu[0].style.borderTop = '0px solid #e0e0e0';
            navDropMenu[0].style.borderBottom = '0px solid #e0e0e0';
        })
    }

    //catagory相关
    var catagory = this.document.getElementById("catagory");
    var catagoryUl = catagory.firstElementChild;
    for(var i = 0; i < catagoryUl.childNodes.length; i++){
        var li = catagoryUl.childNodes[i];
        if("LI" == li.nodeName){
            li.addEventListener('mouseover', function(){
                console.log(this.style);
                var detail = this.firstElementChild;
                var perWidth = 248;//detail.firstElementChild.style.width;
                var width = perWidth * detail.children.length;
                detail.style.width = width + 'px';
                detail.style.display = 'block';
            });
            li.addEventListener('mouseout', function(){
                var detail = this.firstElementChild;
                detail.style.display = 'none';
            });
        }
    }

    //banner 相关
    this.initBannerComponent();
    this.startBanner();
}

var currentBannerIndex = 0;
var lastBannerIndex = 0;
var bannerTask;
function initBannerComponent(){
    var banners = document.getElementsByClassName("banner-real")[0];
    initBannerEvent(banners);

    var bannerLeft = document.getElementById("banner-left");
    var bannerRight = document.getElementById("banner-right");
    initBannerEvent(bannerLeft);
    initBannerEvent(bannerRight);
    var paginationItems = document.getElementsByClassName('pagination-item');
    for(var i = 0; i < paginationItems.length; i++){``
        initBannerEvent(paginationItems[i]);
    }
}

function initBannerEvent(ele){
    ele.addEventListener('mouseover', function(){
        stopBanner();
    });
    ele.addEventListener('mouseout', function(){
        startBanner();
    });
}

function startBanner(){
    if(!bannerTask){
        bannerTask = setInterval(function(){
            switchBanner(1);
        }, 2800);
    }
}
function stopBanner(){
    if(bannerTask){
        clearInterval(bannerTask);
        bannerTask = null;
    }
}

function switchBanner (step) {
    var banners = document.getElementsByClassName("banner-real")[0];
    var len = banners.children.length;
    currentBannerIndex = (currentBannerIndex + step) % len;
    currentBannerIndex = currentBannerIndex < 0 ? currentBannerIndex + len : currentBannerIndex;
    bannerActive(currentBannerIndex);
}

function bannerActive(activeIndex){
    var banners = document.getElementsByClassName("banner-real")[0];
    var pagination = document.getElementsByClassName("pagination")[0];
    
    var len = banners.children.length;
    activeIndex = activeIndex < 0 ? len - 1 : activeIndex;
    activeIndex = activeIndex > len - 1 ? 0 : activeIndex;
    
   
    if(lastBannerIndex != activeIndex){
        banners.children[activeIndex].classList.add('active');
        pagination.children[activeIndex].classList.add('active');

        banners.children[lastBannerIndex].classList.remove('active');
        pagination.children[lastBannerIndex].classList.remove('active');
    }
    currentBannerIndex = activeIndex;
    lastBannerIndex = activeIndex;
}

