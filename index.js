function clock() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if (hh == 0) {
        hh = 12;
    }
    if (hh > 12) {
        hh = hh - 12;
        session = "PM"
    }

    hh = (hh < 10) ? `0${hh}` : hh;
    mm = (mm < 10) ? `0${mm}` : mm;
    ss = (ss < 10) ? `0${ss}` : ss;

    let time = `${hh} : ${mm} : ${ss} ${session}`;

    document.getElementsByClassName("clock")[0].innerHTML = time;

    let dd = date.getDate();
    let yy = date.getMonth();
    let dy = date.getDay();
    let year = date.getFullYear();
    yy = yy == 1 ? "January" : yy == 2 ? "February" : yy == 3 ? "March" : yy == 4 ? "April" : yy == 5 ? "May" : yy == 6 ? "June" : yy == 7 ? "July" : yy = 8 ? "August" : yy = 9 ? "September" : yy = 10 ? "October" : yy == 11 ? "November" : yy = 12 ? "December" : yy;

    dy = dy == 1 ? "Mon" : dy == 2 ? "Tues" : dy == 3 ? "Wed" : dy == 4 ? "Thurs" : dy == 5 ? "Fri" : dy == 6 ? "Satur" : dy == 7 ? "Sun" : dy;
    document.getElementsByClassName("date")[0].innerHTML = `DATE <br> ${dd}`;
    document.getElementsByClassName("month")[0].innerHTML = `MONTH <br> ${yy}`;
    document.getElementsByClassName("day")[0].innerHTML = `DAY <br> ${dy}`;
    document.getElementsByClassName("year")[0].innerHTML = `YEAR <br> ${year}`;

}

setInterval(() => {
    clock()
}, 1)

let digitalBorder = document.getElementsByClassName("digital-border")[0];


let i = 1;
setInterval(() => {
    if(i != 361){

        digitalBorder.style.background = `conic-gradient(cyan ${i}deg , #252323  0deg)`;
        i++ ; 
    }else{
        i = 1;
    }
},20);

