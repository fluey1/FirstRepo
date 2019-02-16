function Block(title, description) {
    this.title = title;
    this.description = description;
    this.width = "50px";
    this.height = "50px";
    
    this.setTitle = function(title) {
        this.title = title;
    }
    this.show = function() {
        result =  " <div class='box'>" + 
                        "<p>" + title + "</p>" + 
                    "</div>";

        return result;
    }


}