document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        themeSystem: 'bootstrap5',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
        },
        initialDate: '2023-01-12',
        navLinks: true, // can click day/week names to navigate views
        businessHours: true, // display business hours
        editable: true,
        selectable: true,
        locale: 'ko',

        events: [
            {
                title: 'Business Lunch',
                start: '2023-01-03T13:00:00',
                constraint: 'businessHours'
            },
            {
                title: 'Meeting',
                start: '2023-01-13T11:00:00',
                constraint: 'availableForMeeting', // defined below
                color: '#257e4a'
            },
            {
                title: 'Conference',
                start: '2023-01-18T20:00:00',
                end: '2023-01-20'
            },
            {
                title: 'Party',
                start: '2023-01-29T19:00:00',
                end: '2023-01-29T20:00:00'

            },

            // areas where "Meeting" must be dropped
            {
                groupId: 'availableForMeeting',
                start: '2023-01-11T10:00:00',
                end: '2023-01-11T16:00:00',
                display: 'background'
            },
            {
                groupId: 'availableForMeeting',
                start: '2023-01-13T10:00:00',
                end: '2023-01-13T16:00:00',
                display: 'background'
            },

            // red areas where no events can be dropped
            {
                start: '2023-01-24',
                end: '2023-01-28',
                overlap: false,
                display: 'background',
                color: '#ff9f89'
            },
            {
                start: '2023-01-06',
                end: '2023-01-08',
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