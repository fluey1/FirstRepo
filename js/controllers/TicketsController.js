function TicketsController() {
    
    let tickets = [];

    this.sayHello = function() {
        console.log('hello there');
    }

    this.addTicket = function(ticket) {
        tickets.push({
           key: ticket.id, 
           value: ticket 
        });
    }

    this.getTickets = function() {
        return tickets;
    }

    this.getTicket = function(id) {
        return tickets.indexOf(id);
    }

    this.newTicket = function(title) {
        let ticket = new Ticket(tickets.length, title); 
        tickets.push(ticket);
        return ticket;
    }
}