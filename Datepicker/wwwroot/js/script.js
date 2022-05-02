const date = new Date();

const renderCalendar = () => {
    date.setDate(1);
    const monthDays = document.querySelector(".month-body");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector(".date h1").innerHTML = date.getFullYear();

    document.querySelector(".date p").innerHTML = months[date.getMonth()];

    let days = '<div class="days">';
    var weekday = 0;
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
        weekday++;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (weekday == 0 && i != 1) {
            days += `<div class="days">`
        }
        
        days += `<div id = "${i}" data-day="${i}" onclick="chooseDate(this)">${i}</div>`;
        
        weekday++

        if (weekday == 7) {
            weekday = 0;
            days += `</div>`
        }
        monthDays.innerHTML = days;

    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        weekday++
    }
    if (weekday == 0) {
        days += `<div class="days">`
    }
    monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

function chooseDate(element) {
    if (element.classList.contains("selected")) {
        element.classList.remove("selected")
    } else {
        element.classList.add("selected")
        var selectedDate = document.getElementsByClassName("selected")
        var length = selectedDate.length
        if (length > 1) {
            var firstSelectedDay = parseInt(selectedDate[0].getAttribute("data-day"))
            var lastSelectedDay = parseInt(selectedDate[length - 1].getAttribute("data-day"))
            while (selectedDate.length > 0) {
                selectedDate[0].classList.remove("selected");
            }
            for (; firstSelectedDay <= lastSelectedDay; firstSelectedDay++) {
                document.getElementById(firstSelectedDay).classList.add("selected")
            }
        }
    }
}

function ChengeMode() {
    if (document.querySelector(".container").classList.contains("whiteMode")) {
        document.querySelector(".container").classList.remove("whiteMode")
    } else {
        document.querySelector(".container").classList.add("whiteMode")
    }
}

function Show() {
    document.getElementById("calendar").style.display = "block";
};

// When the user clicks anywhere outside of the modal, close it
function Close() {
    document.getElementById("calendar").style.display = "none";
};