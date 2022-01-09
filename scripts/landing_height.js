const handleLandingHeight = () => {
    const landing = document.getElementById("landing"), header = document.getElementById("header");
    if(landing !== null && header !== null){
        let windowHeight = window.innerHeight, headerHeight = header.getBoundingClientRect().height;
        
        landing.style.height = (windowHeight - headerHeight)+1 + "px";
    }
}

handleLandingHeight();

document.addEventListener( "load", event => {
    handleLandingHeight();
})
window.addEventListener( "resize", event => {
    handleLandingHeight();
})