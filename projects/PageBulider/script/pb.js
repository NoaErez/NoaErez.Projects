
const userpage = () => {

    const blankpage = document.createElement('div');
    blankpage.id = "blankpage";
    
    //takes the values from  bgcolor
    const color = document.getElementById('bg-color').value;
    const height = document.getElementById('bg-height').value;
    const width = document.getElementById('bg-width').value;
    const text = document.getElementById('bg-text').value;
    const txtcolor = document.getElementById('txt-color').value;
    const txtsize = document.getElementById('txt-size').value;
    const bstyle = document.getElementById('B-style').value;
    const bcolor = document.getElementById('B-color').value;
    const bthick = document.getElementById('B-thick').value;
    const margin = document.getElementById('bg-margin').value;
    const padding = document.getElementById('bg-padding').value;
    const radius = document.getElementById('radius').value;


    //creaing style to the div 
    blankpage.style.backgroundColor = color;
    blankpage.style.height = (height) ? `${height}px` : "100px"; // ? and : are switching the if-else 
    blankpage.style.width = (width) ? `${width}px` : "100px";

    blankpage.style.margin = (margin) ? `${margin}px` : "auto";
    blankpage.style.padding = (padding) ? `${padding}px` : "0";
    blankpage.style.marginTop = "100px";

    blankpage.innerText = `${text}`;
    blankpage.style.color = `${txtcolor}`;
    blankpage.style.fontSize = `${txtsize}px`

    blankpage.style.borderRadius = (radius) ? `${radius}px` : "0px";
    blankpage.style.border = (bthick || bstyle || bcolor) ? `${bthick ? `${bthick}px` : "1px"} ${bstyle || "solid"} ${bcolor || "black"}`
        : "1px solid black";


    //add div to the html
    const container = document.getElementById('container');
    container.innerHTML = ''; // clears content
    container.appendChild(blankpage);

};

