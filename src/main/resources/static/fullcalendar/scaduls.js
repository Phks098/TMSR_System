document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var today = new Date();

// 날짜를 'YYYY-MM-DD' 형식으로 포맷팅합니다.
var date = today.getFullYear()+'-'+(today.getMonth()+1).toString().padStart(2, '0')+'-'+today.getDate().toString().padStart(2, '0');


    var calendar = new FullCalendar.Calendar(calendarEl, {
        themeSystem: 'bootstrap5',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        initialDate: '2023-11-12',
        navLinks: true, // can click day/week names to navigate views
        businessHours: true, // display business hours
        editable: true,
        selectable: true,
        locale: 'ko',

        events: [
            {
                title: 'Business Lunch',
                start: '2023-11-03T13:00:00',
                constraint: 'businessHours'
            },
            {
                title: 'Meeting',
                start: '2023-11-13T11:00:00',
                constraint: 'availableForMeeting', // defined below
                color: '#257e4a'
            },
            {
                title: 'Conference',
                start: '2023-11-18T20:00:00',
                end: '2023-11-20'
            },
            {
                title: 'Party',
                start: '2023-01-29T19:00:00',
                end: '2023-01-29T20:00:00'

            },

            // areas where "Meeting" must be dropped
            {
                groupId: 'availableForMeeting',
                start: '2023-11-11T10:00:00',
                end: '2023-11-11T16:00:00',
                display: 'background'
            },
            {
                groupId: 'availableForMeeting',
                start: '2023-11-13T10:00:00',
                end: '2023-11-13T16:00:00',
                display: 'background'
            },

            // red areas where no events can be dropped
            {
                start: '2023-11-24',
                end: '2023-11-28',
                overlap: false,
                display: 'background',
                color: '#ff9f89'
            },
            {
                start: '2023-11-06',
                end: '2023-11-08',
                overlap: false,
                display: 'background',
                color: '#ff9f89'
            }
        ],
        eventClick: function (info) {
            alert('Event: ' + info.event.title);
            alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
            alert('View: ' + info.view.type);

            // change the border color just for fun
            info.el.style.borderColor = 'red';
        },
        dateClick: function (info) {
            // Show modal
            var modal = new bootstrap.Modal(document.getElementById('eventModal'));
            // Update modal content
            document.getElementById('eventDetails').textContent = 'Clicked on: ' + info.dateStr;
            modal.show();
        }




    });

    calendar.render();
});