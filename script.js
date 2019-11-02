
window.onload= function(){
    var w = window.screen.width;
    var h = window.screen.height;
    var container = this.document.getElementsByClassName("container")[0];
    container.style.width = w;
    container.style.height = h;

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

    this.banner();
}

var currentBannerIndex = 1;
var lastBannerIndex = 0;
function banner(){
    
    
    setInterval(function(){
        switchBanner();
    }, 2800);
}

function switchBanner () {
    console.log(currentBannerIndex);
    var banners = document.getElementsByClassName("banner-real")[0];
    var pagination = document.getElementsByClassName("pagination")[0];
    
    var len = banners.children.length;
    
    banners.children[currentBannerIndex].classList.add('active');
    pagination.children[currentBannerIndex].classList.add('active');
    if(undefined != lastBannerIndex){
        banners.children[lastBannerIndex].classList.remove('active');
        pagination.children[lastBannerIndex].classList.remove('active');
    }
    lastBannerIndex = currentBannerIndex;
    currentBannerIndex = (currentBannerIndex +1) % len;
}

