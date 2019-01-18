function CalendarController() {

    let calendarCells = [];

    this.getCells = function() {
        return calendarCells;
    }

    this.addCell = function(id, cell) {
        calendarCells.push({
            key: id,
            value: cell
        });

        //console.log("Added: key:" + id + " value:" + cell.innerHTML);
    }

    this.isCollide = function(a, b) {
        return !(
            ((a.y + a.height) < (b.y)) ||
            (a.y > (b.y + b.height)) ||
            ((a.x + a.width) < b.x) ||
            (a.x > (b.x + b.width))
        );
    }
}