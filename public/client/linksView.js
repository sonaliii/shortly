Shortly.LinksView = Backbone.View.extend({

  className: 'links',

  initialize: function(){
    this.collection.on('sync', this.addAll, this);
    this.collection.fetch();
  },

  events: {
    'change .filter': 'sort'
  },


  sort: function () {
    if(document.getElementById("numberOfVisits").checked) {
      $.get('http://localhost:4567/links', {value: "visits"});
      this.collection.fetch();
    } else {
      $.get('http://localhost:4567/links', {value: "created_at"});
      this.collection.fetch({
        success: function (model, response) {
          console.log(response);
        }
      });
    }
  },

  render: function() {
    this.$el.empty();
    this.$el.append('<h4>Sort Results By:</h4><form class="filter"><label for="numberVisits">Number of Visits</label><input type="radio" name="filter" id="numberOfVisits" value="numberVisits"><br><label for="recentlyVisited">Recently Visited</label><input type="radio" name="filter" value="recentlyVisited"></form>');
    return this;
  },

  addAll: function(){
    this.collection.forEach(this.addOne, this);
  },

  addOne: function(item){
    var view = new Shortly.LinkView( {model: item} );
    this.$el.append(view.render().el);
  }

});