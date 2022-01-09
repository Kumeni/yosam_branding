
const handleContactUsClick = event => {
    const contact_us_section = document.getElementsByClassName("contact_us_section")[0];

    if(event === false){
        contact_us_section.style.display = "none";
        contact_us_section.style.backgroundColor = "";
        return null;
    }

    contact_us_section.style.display = "grid";
    //contact_us_section.style.backgroundColor = "white";
    setTimeout(()=>{
        //contact_us_section.style.backgroundColor = "rgba(15, 15, 15, 0.7)";
    }, 200);
    
}