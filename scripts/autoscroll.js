let scrollTargets, scrollData = [], i, interval = 1, scrollArea;

//scrollData structrure
//+----------+----------+-----+
//| initialY | currentY | max |
//+----------+----------+-----+
const getScrollTargets = () => {
    scrollTargets = document.getElementsByClassName("autoscroll");

    for(i = 0; i < scrollTargets.length; i++){
        //stores the maximum scroll pos
        scrollArea = [];
        scrollArea[0] = scrollTargets[i].scrollLeft;
        scrollArea[1] = scrollTargets[i].getElementsByTagName("div")[0].getBoundingClientRect().width;
        scrollData.push(scrollArea);
    }
}

getScrollTargets();
const autoScroll = (element) => {
    if(element.scrollLeft == 0){
        scrollData[i][0] = element.scrollLeft;
        element.scroll({
            top:0,
            left:(element.scrollLeft + interval),
            behaviour:"smooth"
        })
    } else if(element.scrollLeft >= scrollData[i][1]){
        scrollData[i][0] = element.scrollLeft;
        element.scroll({
            top:0,
            left:(element.scrollLeft - interval),
            behaviour:"smooth"
        })
    } else {
        if(element.scrollLeft > scrollData[i][0]){
            scrollData[i][0] = element.scrollLeft;
            element.scroll({
                top:0,
                left:(element.scrollLeft + interval),
                behaviour:"smooth"
            })
        } else {
            scrollData[i][0] = element.scrollLeft;
            element.scroll({
                top:0,
                left:(element.scrollLeft - interval),
                behaviour:"smooth"
            })
        }
    }
}

window.addEventListener("resize", getScrollTargets);
let Intervalling = setInterval(()=>{
    for(i = 0; i < scrollTargets.length; i++){
        autoScroll(scrollTargets[i]);
    }
}, 100);