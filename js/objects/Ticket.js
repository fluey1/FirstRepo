function Ticket(id,title) {
    this.title = title;
    this.id = id;
    this.summary = "";
    
    this.setSummary = function(summary) {
        this.summary = summary;
    }

}