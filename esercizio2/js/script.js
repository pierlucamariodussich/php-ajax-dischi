let myApp = new Vue ({

  el:'#root',

  data:{
     cds:[],
     genreInput:'All',
  },
  mounted: function(){

    axios.get("https://flynn.boolean.careers/exercises/api/array/music")
    .then((result) =>{

      this.cds = (result.data.response);
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
