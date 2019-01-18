function CalendarCell() {
    let tickets = [];

    this.addTicket = function(ticket) {
        tickets.push({
           key: ticket.id, 
           value: ticket 
        });
    }


}
