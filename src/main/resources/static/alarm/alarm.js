{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
</svg> */}
// 해야 할일 아이콘 https://icons.getbootstrap.kr/icons/check-square/
const todoListIcon = `<svg xmlns="http://www.w3.org/2000/svg" idth="20" height="20" fill="#87CEFA" class="bi bi-check-square" viewBox="0 0 16 16">
<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
<path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
</svg>`; //

{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar4" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
</svg> */}
// 팀 스케쥴 아이콘 https://icons.getbootstrap.kr/icons/calendar4/
const teamScaduleIcon = `<svg xmlns="http://www.w3.org/2000/svg" idth="20" height="20" fill="#00A67E" class="bi bi-calendar4" viewBox="0 0 16 16">
<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
</svg>`;


// 일반 공지 아이콘 https://icons.getbootstrap.kr/icons/journal-text/
const noteIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FFC0CB" class="bi bi-journal-text" viewBox="0 0 16 16">
    <path d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
    <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
    <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
  </svg>
`;



const notices = [
  {
    title: "[공지] Github 기초 팀 프로젝트 규칙 입니다.",
    date: "2023-10-01",
    teamName: "Github 4팀",
    noticeType: 1,
    noteID: 10
  },
  {
    title: "공지 제목 2",
    date: "2023-10-02",
    teamName: "팀 B",
    noticeType: 2,
    noteID: 10
  },
  {
    title: "공지 제목 3",
    date: "2023-10-03",
    teamName: "팀 C",
    noticeType: 3,
    noteID: 10
  },
  {
    title: "공지 제목 4",
    date: "2023-10-04",
    teamName: "팀 D",
    noticeType: 1,
    noteID: 10
  }
];

var noticesHTML = '';
for (var i = 0; i < notices.length; i++) {
  if (notices[i].noticeType === 1) {
    noticesHTML += `
            <div class="icon col-md-1">
            ${noteIcon}
            </div>
            <div class="voteDiv col-md-11">
                <div class="row ">
                    <div class="col-md-12 ellipsis team_title">${notices[i].title}</div>
                    <div class="col-md-12 ellipsis team_noteInfo">${notices[i].date} 팀명: ${notices[i].teamName}</div>
                </div>
            </div>
        `;
  }
  if (notices[i].noticeType === 2) {
    noticesHTML += `
            <div class="icon col-md-1">
            ${teamScaduleIcon}
            </div>
            <div class="voteDiv col-md-11">
                <div class="row id="note_${i}">
                    <div class="col-md-12 ellipsis team_title">${notices[i].title}</div>
                    <div class="col-md-12 ellipsis team_noteInfo">${notices[i].date} 팀명: ${notices[i].teamName}</div>
                </div>
            </div>
        `;
  }
  if (notices[i].noticeType === 3) {
    noticesHTML += `
            <div class="icon col-md-1">
            ${todoListIcon}
            </div>
            <div class="voteDiv col-md-11 id="note_${i}">
                <div class="row ">
                    <div class="col-md-12 ellipsis team_title ">${notices[i].title}</div>
                    <div class="col-md-12 ellipsis team_noteInfo">${notices[i].date} 팀명: ${notices[i].teamName}</div>
                </div>
            </div>
        `;
  }
}

// 생성된 HTML 코드를 원하는 위치에 붙여넣음 (예: 특정 div 내부)
document.querySelector('.voteBody').innerHTML = noticesHTML;


document.addEventListener('DOMContentLoaded', (event) => {
  // Get the element with the class 'voteBody'
  var voteBody = document.querySelector('.voteBody');

  // Check if the element exists to avoid null reference errors
  if (voteBody) {
    // Add a click event listener to the element
    voteBody.addEventListener('click', function () {
      // Display an alert when the element is clicked
      alert('VoteBody area clicked!');
    });
  }
});
reset();