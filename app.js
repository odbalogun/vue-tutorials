new Vue({
  el: '#vue-app', // el specifies the root element of the vue app
  data: {
    name: "Ohdeebee",
    job: 'Software Engineer',
    website: 'http://www.thenetninja.co.uk',
    websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja</a>'
  },
  methods: {
    greet: function(timeOfDay){
      // you can access values from data by using this.data.job or just this.job
      return 'Good ' + timeOfDay + ', ' + this.name
    }
  }
});
