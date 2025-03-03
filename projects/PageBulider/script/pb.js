
const updateEmbedCode = () => {
    const container = document.getElementById('container');
    const embedCode = document.getElementById('embedCode');

    embedCode.value = container.innerHTML; // מעדכן את הטקסט עם הקוד שנוצר
};

const userPage = () => {
    const blankpage = document.createElement('div');
    blankpage.id = "blankpage";


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


    blankpage.style.backgroundColor = color;
    blankpage.style.height = (height) ? `${height}px` : "100px";
    blankpage.style.width = (width) ? `${width}px` : "100px";
    blankpage.style.margin = (margin) ? `${margin}px` : "auto";
    blankpage.style.padding = (padding) ? `${padding}px` : "0";
    blankpage.style.marginTop = "100px";
    blankpage.innerText = `${text}`;
    blankpage.style.color = `${txtcolor}`;
    blankpage.style.fontSize = `${txtsize}px`;
    blankpage.style.borderRadius = (radius) ? `${radius}px` : "0px";
    blankpage.style.border = (bthick || bstyle || bcolor) ? `${bthick ? `${bthick}px` : "1px"} ${bstyle || "solid"} ${bcolor || "black"}` : "1px solid black";


    const container = document.getElementById('container');
    container.innerHTML = '';
    container.appendChild(blankpage);

    updateEmbedCode(); // מעדכן את הקוד ב-Embed
};   

const clearPage = () => {
    // מנקה את ה-container
    const container = document.getElementById('container');
    container.innerHTML = '';  

    // מאפס את כל הערכים בשדות הקלט
    document.getElementById('bg-color').value = "#f2f2f2";
    document.getElementById('bg-height').value = '';
    document.getElementById('bg-width').value = '';
    document.getElementById('bg-text').value = '';
    document.getElementById('txt-color').value = '#000000';
    document.getElementById('txt-size').value = '';
    document.getElementById('B-style').value = 'solid';
    document.getElementById('B-thick').value = '';
    document.getElementById('B-color').value = '#000000';
    document.getElementById('bg-margin').value = '';
    document.getElementById('bg-padding').value = '';
    document.getElementById('radius').value = '';
};




 




