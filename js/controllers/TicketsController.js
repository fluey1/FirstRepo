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
        this.ticketFound = null;
        tickets.forEach(function(element) {
            if(element.id == id) {
                ticketFound =  element;
            }
        }, this);
        return ticketFound;
    }

    this.newTicket = function(title) {
        let ticket = new Ticket(tickets.length, title); 
        tickets.push(ticket);
        return ticket;
    }

    this.initialize  = function(n) { 
        for(i = 0; i < n; i++) {
            let ticket = new Ticket(tickets.length, "New Ticket "+i); 
            tickets.push(ticket);   
        }
    }

}