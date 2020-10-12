new Vue({
  el: '#vue-app', // el specifies the root element of the vue app
  data: {
    name: "Ohdeebee",
    job: 'Software Engineer'
  },
  methods: {
    greet: function(timeOfDay){
      // you can access values from data by using this.data.job or just this.job
      return 'Good ' + timeOfDay + ', ' + this.name
    }
  }
});
