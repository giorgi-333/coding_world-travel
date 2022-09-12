

let disableCss = false


function toggleCss() { 
    disableCss = !disableCss
    const linkCss = document.querySelector("#linkCss")

    linkCss.setAttribute("href", disableCss ? "" : "css/style.css"); 
 }