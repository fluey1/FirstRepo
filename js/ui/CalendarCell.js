function CalendarCell(content) {
    let tickets = [];
    this.content = content;

    this.addTicket = function(ticket) {
        tickets.push({
           key: ticket.id, 
           value: ticket 
        });
    }

    this.removeTicket = function(id) {
        tickets.splice(id,1);
    }

    
}
