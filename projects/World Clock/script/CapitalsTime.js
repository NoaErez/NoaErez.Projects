
const header = document.getElementById("header");
const text = header.textContent;
header.innerHTML = text 
  .split("") // מפריד אותיות וסטרינג
  .map((char, i) => `<span style="animation-delay: ${i * 0.1}s">${char}</span>`) //דיליי לכל אות על ידי הכפלת אינדקס ב0.1 + הכנסה של כל אות שהופרדה לספאן
  .join(""); //יחבר את כל הספאן לסטרינג אחד

setInterval(() => {
    const LondonTime = new Date();
    LondonTime.setHours(LondonTime.getHours() - 2);

    const time = document.getElementById("time");
    time.innerHTML = LondonTime.toLocaleTimeString();
}, 1000);

setInterval(() => {
    const ARtime = new Date();
    ARtime.setHours(ARtime.getHours() - 5);

    const time2 = document.getElementById("time2");
    time2.innerHTML = ARtime.toLocaleTimeString();
}, 1000);

setInterval(() => {
    const DublinTime = new Date();
    DublinTime.setHours(DublinTime.getHours() - 2);

    const time3 = document.getElementById("time3");
    time3.innerHTML = DublinTime.toLocaleTimeString();
}, 1000);

setInterval(() => {
    const CubaTime = new Date();
    CubaTime.setHours(CubaTime.getHours() - 7);

    const time4 = document.getElementById("time4");
    time4.innerHTML = CubaTime.toLocaleTimeString();
}, 1000);

