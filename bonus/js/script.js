let myApp = new Vue ({

  el:'#root',

  data:{
     cds:[],
     genreInput:'All',
     search: '',
     textFilter: '',
  },
  mounted: function(){

    axios.get("http://localhost:8888/php-ajax-dischi/bonus/server.php")
    .then((result) =>{
      this.cds = (result.data);
      });

  },

  computed:{
  cdsFiltered: function(){
      return this.cds.filter(e =>{
        if(this.genreInput == "All"){
          return true
        } else {
          return e.genre.toLowerCase().includes(this.genreInput.toLowerCase())
        }
      });
    }
  },

  methods:{
    filter(){
      axios.get("http://localhost:8888/php-ajax-dischi/bonus/server.php?filter=" + this.textFilter)
      .then((result) =>{
      this.cds = (result.data);
      });
    }
  }


});
