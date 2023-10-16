// visitor data
let visitorData = [
    { month: "January", visitors: 23 },
    { month: "February", visitors: 27 },
    { month: "March", visitors: 38 },
    { month: "April", visitors: 33 },
    { month: "May", visitors: 100 },
    { month: "June", visitors: 25 }
]

//console.log(visitorData.length);

const visitorTable = document.querySelector(".visitor-table");

console.log(visitorTable);

for (let i = 0; i < visitorData.length; i++) {

    const tableRow = document.createElement("tr");
    const tdMonth = document.createElement("td");
    tdMonth.textContent = visitorData[i].month;
    const tdVisitors = document.createElement("td");
    tdVisitors.textContent = visitorData[i].visitors;
    tableRow.appendChild(tdMonth);
    tableRow.appendChild(tdVisitors);
    visitorTable.appendChild(tableRow);
}

