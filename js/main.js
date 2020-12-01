//https://flynn.boolean.careers/exercises/api/array/music

const app = new Vue({
  el: "#body",
  data: {
    albums: new Array(),
    currentSelect: null,
  },
  computed: {
    filter() {
      if (this.currentSelect == null) {
        return this.albums
      } else {
      return this.albums.filter(album => album.genre == this.currentSelect)
    }}
  },

  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((result) => {
        this.albums = result.data.response;
      })
      .catch((err) => {
        alert(`C'è stato un errore! ${err}`);
      });
  },
});
