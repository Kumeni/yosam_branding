let elementsScrollState = [];
function autoScrollX(speed){
    /**
     * elements - array of all the elements that need to be autoscrolled.
     * speed - pixels per second
     */
    let i, elements = document.getElementsByClassName("auto-scroll");;
    for( i=0; i<elements.length; i++ ){
        if(elementsScrollState[i] == undefined) elementsScrollState[i] = {};
        elementsScrollState[i].scrollWidth = elements[i].scrollWidth;
        elementsScrollState[i].clientWidth = elements[i].clientWidth;
        elementsScrollState[i].currentScrollPos = elements[i].scrollLeft;

        //console.log(elementsScrollState[i].currentScrollPos);
        //console.log(elementsScrollState[i].initialScrollPos);
        //console.log(elementsScrollState[i].initialScrollPos < elementsScrollState[i].currentScrollPos);
        //console.log(elementsScrollState[i].currentScrollPos == undefined);
        //if(elements[i].scrollLeft + elements[i].clientWidth < elements[i].scrollWidth){
        if(elementsScrollState[i].initialScrollPos == undefined || elementsScrollState[i].currentScrollPos > elementsScrollState[i].initialScrollPos ||  elementsScrollState[i].currentScrollPos <= 0){
            //Can scroll to the right
            elementsScrollState[i].initialScrollPos = elements[i].scrollLeft;
            elementsScrollState[i].currentScrollPos = elements[i].scrollLeft+speed;
            
        } else {
            //scroll to the left
            elementsScrollState[i].initialScrollPos = elements[i].scrollLeft;
            elementsScrollState[i].currentScrollPos = elements[i].scrollLeft-speed;
        }
        
        elements[i].scrollTo(elementsScrollState[i].currentScrollPos, 0);
    }
}

let autoScrollContainer = setInterval(() => {
    autoScrollX(1);
}, 32);
console.log("Test");
/**
 * 16 normal speed
 * 32 half normal speed
 */