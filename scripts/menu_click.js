let menuState = "CLOSED", lastScrollPos;
const handleMenuClick = () => {
    let bars = document.getElementById("menu").getElementsByTagName("div"), i,
    main = document.getElementsByTagName("main")[0],
    footer = document.getElementsByTagName("footer")[0],
    menu_info = document.getElementsByClassName("menu_info")[0],
    header = document.getElementsByTagName("header"), menuInfoHeight;

    if(menuState === "CLOSED"){
        for(i=1; i<bars.length; i++){
            bars[i].style.width = "100%";
        }
        
        lastScrollPos = window.scrollY;
        menuInfoHeight = menu_info.getBoundingClientRect().height;

        main.style.height = menuInfoHeight + "px";
        menu_info.style.marginLeft = "0px";
        footer.style.display = "none";

        menuState = "OPEN";
    
    } else if( menuState === "OPEN"){
        for (i=1; i<bars.length; i++){
            if(i === 1)
                bars[i].style.width = "50%";
            else
                bars[i].style.width = "25%";
        }

        main.style.height = "auto";
        menu_info.style.marginLeft = -window.innerWidth +"px";
        footer.style.display = "block";

        menuState = "CLOSED";
    }
    
    return null;

}

