// Namespace our app
var app = app || {};

app.singleFlower = Backbone.Model.extend({
	defaults: {
		color: 'pink', 
		img: 'images/placeholder.jpg'
	}, 

	initialize: function() {
	console.log("A model instance named " + this.get("name") +  " has been created and it costs " + this.get("price"));

	    // notifies of a change to the model
	    this.on('change', function(){
	      console.log("The " + this.get("name") + " model has changed.");
	    });

	    // specifies a price change
	    this.on('change:price', function(){
	      console.log("The price for the " + this.get("name") + " model just changed to $" + this.get("price") + " dollars");
	    });
	}

});