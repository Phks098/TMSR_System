const tableBody = document.getElementById("tableBody");

const teams = [
    {
        teamNumber: 1,
        teamTitle: "Team Alpha",
        teamCreator: "Alice"
    },
    {
        teamNumber: 2,
        teamTitle: "Team Beta",
        teamCreator: "Bob"
    },
    {
        teamNumber: 3,
        teamTitle: "Team Gamma",
        teamCreator: "Charlie"
    },
    // ... 추가 팀 객체를 여기에 추가할 수 있습니다.
];

function createRow() {
    for (let i = 0; i < teams.length; i++) {
        var tr = document.createElement("tr");
        var tdNumber = document.createElement("td");
        var tdTeamName = document.createElement("td");
        var tdcreater = document.createElement("td");
        var tdinsert = document.createElement("td");
        var inputteambtn = document.createElement("button");
        tr.id = 'tr_' + i;
        tdNumber.textContent = teams[i].teamNumber;
        tdTeamName.textContent = teams[i].teamTitle;
        tdcreater.textContent = teams[i].teamCreator;
        tr.appendChild(tdNumber);
        tr.appendChild(tdTeamName);
        tr.appendChild(tdcreater);
        //btn btn-outline-secondary btn-sm
        inputteambtn.classList.add('btn')
        inputteambtn.classList.add('btn-outline-secondary')
        inputteambtn.classList.add('btn-sm')
        inputteambtn.textContent = '자세히 보기'
        tdinsert.appendChild(inputteambtn);
        tr.appendChild(tdinsert);
        tableBody.append(tr);


    }


}

createRow();