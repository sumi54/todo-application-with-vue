<template>
  <div class="home">
    <div v-if="yapilacaklar.length">
      <div v-for="yap in yapilacaklar" :key="yap.id">
        <yapilacak :yapilacak="yap"/>
        </div>
    </div>
    <div v-else>
      <p>Yapılacaklar Yükleniyor..</p>
    </div>
    </div>
</template>
<script>
import yapilacak from "../components/Yapılacak.vue"
export default{
  name:'Home',
  components:{
    yapilacak
  },
  data(){
    return{
      yapilacaklar:[]
    }
  },
  mounted(){
    fetch('http://localhost:3000/yapilacaklar')
    .then((res)=>res.json())
    .then((data)=>this.yapilacaklar=data)
    .catch((err)=>console.log(err))
  }
}
</script>