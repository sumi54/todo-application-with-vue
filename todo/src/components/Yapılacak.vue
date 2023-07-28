
<template>
    <div class="yapilacak" :class="{'yapildi':yapilacak.yapildi}">
        <div class="baslik">
            <h3 @click="detayGoster=!detayGoster" >{{ yapilacak.baslik }}</h3>
            <div class="icon">
                <!-- <i class="fa-solid fa-check" style="color: #eceff4;"></i> -->
                <!-- <i class="fa fa-search" aria-hidden="true"></i>
                <i class="fa-solid fa-delete-left" aria-hidden="true"></i> -->
                <div class="icons">
                 <img src="../icons/check-lg.svg" alt="check" class="material-icons" @click="toggle">   
                 <img src="../icons/trash-fill.svg" alt="check" class="material-icons" @click="yapilacakSil">   
                  
                 <router-link :to="{name:'YapilacakGuncelle',params:{id:yapilacak.id}}">
                    <img src="../icons/pencil-fill.svg" alt="check" class="material-icons"> 
                </router-link>
                </div>
                
            </div>
        </div>
        <div v-if="detayGoster" class="detay">
            <p>{{ yapilacak.icerik }}</p>
        </div>
    </div>

</template>
<script>
export default{
    props:['yapilacak'],
    data(){
        return{
            detayGoster:false,
            uri:'http://localhost:3000/yapilacaklar/'+this.yapilacak.id
        }
    },
    methods:{
        yapilacakSil(){ //yapilacak dizi içinde siliyor
            fetch(this.uri,{method:'DELETE'})
            .then(()=>this.$emit('sil',this.yapilacak.id))
            .catch((err)=>console.log(err))
        },
        toggle(){
            fetch(this.uri,{
                method:'PATCH',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({yapildi:!this.yapilacak.yapildi})
            }).then(()=>{
                this.$emit('yapildi',this.yapilacak.id)
            }).catch((err)=>console.log(err))
        }
    }
}
</script>
<style>
    .yapilacak{
        margin:20px auto;
        background-color: #4b4b4b;
        padding: 10px 20px;
        border-radius: 15px;
        border:3px solid #b33939;
        color:#f7f1e3;
    }

    .yapilacak:hover{
        box-shadow: 8px 10px 10px rgba(2,2,2,0.3);
    }
    h3{
        cursor: pointer;
    }

    .baslik{
        display: flex;
        justify-content: space-between;
        align-content: center;
    }

    .material-icons{
        font-size: 25px;
        margin-left: 10px;
        color:#bbb;
        cursor: pointer;
    }
    .material-icons:hover{
        color:#2f3543
    }

    .yapilacak.yapildi{
        border:3px solid #218c74
    }

    .yapilacak.yapildi .tick{
        color:#218c74
    }
    .material-icons{
        width: 0.8em;
        margin-top: 0.3em;
    }
</style>
