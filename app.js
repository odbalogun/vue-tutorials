new Vue({
  el: '#vue-app', // el specifies the root element of the vue app
  data: {
    name: "Ohdeebee",
    job: 'Software Engineer',
    website: 'http://www.thenetninja.co.uk',
    websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja</a>',
    age: 30,
    x: 0,
    y: 0
  },
  methods: {
    greet: function(timeOfDay){
      // you can access values from data by using this.data.job or just this.job
      return 'Good ' + timeOfDay + ', ' + this.name
    },

    add: function(inc){
      this.age += inc
    },

    subtract: function(dec){
      this.age -= dec
    },

    updateXY: function(event){
      // event is a default param made available whenever a function is triggered by an event occurence. It is automatically passed to the function
      // run console.log(event) to see what is available in the event object
      this.x = event.offsetX
      this.y = event.offsetY
    }
  }
});
