function Calendar() {


    let daysOfWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    let table = document.createElement("table");
    table.border = 1;

    let headerRow = document.createElement("tr");

    for (i = 0; i < daysOfWeek.length; i++) {
        let headerCell = document.createElement("th");
        headerCell.innerHTML = daysOfWeek[i];
        headerRow.appendChild(headerCell);
    }
    table.appendChild(headerRow);
    let row = document.createElement("tr"); 
    for (i = 1; i <= 30; i++) {
        
        if (i % 7 == 0) {
            
            let cell = document.createElement("td");
            cell.innerHTML = i;
            row.appendChild(cell);
            table.appendChild(row);
            row = document.createElement("tr"); 
        }
        else {
            let cell = document.createElement("td");
            cell.innerHTML = i;
            row.appendChild(cell);  
        }
    };
    table.appendChild(row);

    this.showCalendar = function() {
        return table;
    }
    



}
