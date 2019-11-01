
window.onload= function(){
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
            // li.addEventListener('mouseover', function(){
            //     console.log(1);
            //     var detail = catagoryUl.childNodes[i].firstElementChild;
            //     detail.style.display = 'block';
            // });
            // li.addEventListener('mouseout', function(){

            // });
            li.addEventListener('mouseover', function(){
                console.log(this.style);
                var detail = this.firstElementChild;
                detail.style.display = 'block';
            });
            li.addEventListener('mouseout', function(){
                var detail = this.firstElementChild;
                detail.style.display = 'none';
            });
        }
    }

}