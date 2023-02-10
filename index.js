$( document ).ready(function() {
    let btnMenu = $(".header-btn")
    let menuList = $(".menu")[0]
    let exitMenu = $(".header-exit")
    btnMenu.on("click",function(){
        $(menuList).toggleClass('active')
    })
    exitMenu.on("click",function(){
        
        $(menuList).removeClass('active')
    })
});
