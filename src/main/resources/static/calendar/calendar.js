const calendarBody = document.getElementById('calendar-body');
const scheduleBox = document.getElementById('schedule-box');
const scheduleContent = document.getElementById('schedule-content');
const monthYear = document.getElementById('month-year');


const bluebox = document.getElementById("blue-box");
const boxheader = document.getElementById("box_header");



monthYear.className = 'month-year';
let today = new Date();
let currentDay = today.getDate();





let schedule = [
    {
        title: "회의",
        startTime: new Date(2023, 9, 1, 9, 0),  // 2023년 10월 1일 09:00
        endTime: new Date(2023, 9, 1, 10, 0),  // 2023년 10월 1일 10:00
        isAllDay: false
    },
    {
        title: "점심 식사",
        startTime: new Date(2023, 9, 1, 12, 0),  // 2023년 10월 1일 12:00
        endTime: new Date(2023, 9, 1, 13, 0),  // 2023년 10월 1일 13:00
        isAllDay: false
    },
    {
        title: "팀 빌딩 워크숍",
        startTime: new Date(2023, 9, 1, 14, 0),  // 2023년 10월 1일 14:00
        endTime: new Date(2023, 9, 1, 18, 0),  // 2023년 10월 1일 18:00
        isAllDay: false
    }];

function drawCalendar(year, month) {
    calendarBody.innerHTML = '';
    let firstDay = new Date(year, month, 1).getDay();
    let lastDate = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = year + '년  ' + (month + 1) + '월';
    let row = document.createElement('tr');
    for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement('td'));
    }

    var prevSelectedCell = null;
    for (let i = 1; i <= lastDate; i++) {
        let cell = document.createElement('td');
        cell.className = 'no_check';
        cell.textContent = i;

        // Format the date as YYYY-MM-DD
        const dateStr = `${year}년 ${String(month + 1).padStart(2, '0')}월 ${String(i).padStart(2, '0')}일`;
        // 날짜를 클릭한 경우



        cell.addEventListener('click', function () {
            if (prevSelectedCell) {
                prevSelectedCell.classList.remove('yes_check');
            }
            this.classList.add('yes_check');
            prevSelectedCell = this;

        });
        cell.addEventListener('click', () => displaySchedule(dateStr));





        if (year == 2023 && month == 9 && i == 3) {
            cell.classList.add('today');
        } else {
            cell.classList.remove('today');
        }

        row.appendChild(cell);

        if ((i + firstDay) % 7 === 0 || i === lastDate) {
            calendarBody.appendChild(row);
            row = document.createElement('tr');
        }
    }

    for (let i = 1; i <= lastDate; i++) {
        let cell = document.createElement('td');
        cell.textContent = i;
    }
    displaySchedule(year, date);
}

function prevMonth() {
    today.setMonth(today.getMonth() - 1);
    drawCalendar(today.getFullYear(), today.getMonth());
}

function nextMonth() {
    today.setMonth(today.getMonth() + 1);
    drawCalendar(today.getFullYear(), today.getMonth());
}

function formatTime(scheduleTime) {
    var hours = scheduleTime.getHours();
    var minutes = scheduleTime.getMinutes();


    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    var sformattedTime = hours + ':' + minutes;
    return sformattedTime;
}


function displaySchedule(dateStr) {
    bluebox.innerHTML = '';
    var schedulprint = document.createElement("div");
    var title = document.createElement("div");
    var time = document.createElement("div");
    boxheader.textContent = dateStr;
    bluebox.appendChild(boxheader);
    if (schedule.length > 0) {

        for (let i = 0; i < schedule.length; i++) {
            var schedulprint = document.createElement("div");
            var title = document.createElement("div");
            var time = document.createElement("div");
            schedulprint.className = "schedulprint";
            title.textContent = schedule[i].title;
            title.className = "title";


            time.textContent = formatTime(schedule[i].startTime) + " ~ " + formatTime(schedule[i].endTime);
            time.className = "time";
            schedulprint.appendChild(title);
            schedulprint.appendChild(time);
            bluebox.appendChild(schedulprint);
        }

    }



}
displaySchedule(today.getFullYear() + "년 " + String(today.getMonth() + 1).padStart(2, '0') + "월 " + String(today.getDate()).padStart(2, '0') + "일");
drawCalendar(today.getFullYear(), today.getMonth());
