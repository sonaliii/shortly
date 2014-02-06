Shortly.LinksView = Backbone.View.extend({

  className: 'links',

  initialize: function(){
    this.collection.on('sync', this.addAll, this);
    this.collection.fetch();
  },

  events: {
    'change .filter': 'sort',
    'submit': 'filter'
  },


  sort: function (e) {
    e.preventDefault();
    if(document.getElementById("numberOfVisits").checked) {
      // $.get('http://localhost:4567/links', {value: "visits"});
      this.collection.fetch({
        url: '/links/visits'
      });
    } else {
      // $.get('http://localhost:4567/links', {value: "created_at"});
      this.collection.fetch({
        url: '/links/updated_at'
      });
    }
  },

  render: function() {
    this.$el.empty();
    this.$el.append('\
      <form> \
        <input class="search" placeholder="Search Here..."></input> \
      </form> \
      <h4>Sort Results By:</h4> \
        <form class="filter"> \
          <label for="numberVisits">Number of Visits</label> \
          <input type="radio" name="filter" id="numberOfVisits" value="numberVisits"><br> \
          <label for="recentlyVisited"> \
              Recently Visited \
          </label> \
          <input type="radio" name="filter" value="recentlyVisited"> \
        </form>');
    return this;
  },

  addAll: function(){
    console.log(this.collection);
    this.render();
    this.collection.forEach(this.addOne, this);
  },

  addOne: function(item){
    var view = new Shortly.LinkView( {model: item} );
    this.$el.append(view.render().el);
  },

  filter: function(e){
    e.preventDefault();
    var form = this.$el.find('.search');
    var text = form.val();
    this.collection.fetch({
      url: '/links/filter/' + text
    });
    form.val('');
  }

});