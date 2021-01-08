let myApp = new Vue ({

  el:'#root',

  data:{
     cds:[],
     genreInput:'All',
  },
  mounted: function(){

    axios.get("http://localhost:8888/php-ajax-dischi/esercizio2/server.php")
    .then((result) =>{

      this.cds = (result.data);
        console.log(this.cds)

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
  }

});
