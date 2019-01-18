function Ticket(id,title) {
    this.title = title;
    this.id = id;
    this.summary = "";
    
    this.setSummary = function(summary) {
        this.summary = summary;
    }

    this.toString= function() {
        return this.id + " - " + this.title;
    }

}