
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
    const JerTime = new Date();
    JerTime.setHours(JerTime.getHours() + 0);

    const time3 = document.getElementById("time3");
    time3.innerHTML = JerTime.toLocaleTimeString();
}, 1000);

setInterval(() => {
    const CubaTime = new Date();
    CubaTime.setHours(CubaTime.getHours() - 7);

    const time4 = document.getElementById("time4");
    time4.innerHTML = CubaTime.toLocaleTimeString();
}, 1000);

setInterval(() => {
    const TokyoTime = new Date();
    TokyoTime.setHours(TokyoTime.getHours() + 7); // זמן טוקיו

    const time5 = document.getElementById("time5");
    time5.innerHTML = TokyoTime.toLocaleTimeString();
}, 1000);

setInterval(() => {
    const NewYorkTime = new Date();
    NewYorkTime.setHours(NewYorkTime.getHours() - 7); // זמן ניו יורק

    const time6 = document.getElementById("time6");
    time6.innerHTML = NewYorkTime.toLocaleTimeString();
}, 1000);

setInterval(() => {
    const ParisTime = new Date();
    ParisTime.setHours(ParisTime.getHours() + 1); // זמן פריז

    const time7 = document.getElementById("time7");
    time7.innerHTML = ParisTime.toLocaleTimeString();
}, 1000);

setInterval(() => {
    const SydneyTime = new Date();
    SydneyTime.setHours(SydneyTime.getHours() + 9); // זמן סידני

    const time8 = document.getElementById("time8");
    time8.innerHTML = SydneyTime.toLocaleTimeString();
}, 1000);

setInterval(() => {
    const BeijingTime = new Date();
    BeijingTime.setHours(BeijingTime.getHours() + 6); // זמן בייג'ינג

    const time9 = document.getElementById("time9");
    time9.innerHTML = BeijingTime.toLocaleTimeString();
}, 1000);

setInterval(() => {
    const MoscowTime = new Date();
    MoscowTime.setHours(MoscowTime.getHours() + 3); // זמן מוסקבה

    const time10 = document.getElementById("time10");
    time10.innerHTML = MoscowTime.toLocaleTimeString();
}, 1000);

setInterval(() => {
    const CapeTownTime = new Date();
    CapeTownTime.setHours(CapeTownTime.getHours() + 2); // זמן קייפטאון

    const time11 = document.getElementById("time11");
    time11.innerHTML = CapeTownTime.toLocaleTimeString();
}, 1000);

setInterval(() => {
    const RioTime = new Date();
    RioTime.setHours(RioTime.getHours() - 3); // זמן ריו דה ז'ניירו

    const time12 = document.getElementById("time12");
    time12.innerHTML = RioTime.toLocaleTimeString();
}, 1000);
