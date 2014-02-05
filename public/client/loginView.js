Shortly.LoginView = Backbone.View.extend({

  className: 'login',

  template: _.template(' \
    <form>
    <input type="text" id="username" placeholder="Enter username" /> \
    <input type="password" id="password" placeholder="password" /> \
    <button id="submit">Submit</button> \
    </form>'
  ),

  render: function() {
    this.$el.html( this.template(this.model.attributes) );
    return this;
  }

});