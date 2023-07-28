<template>
    <div>
        <h1>Yapilacak Güncelle</h1>
        <form>
            <label>Başlık:</label>
            <input type="text" v-model="baslik"/>
            <label>İçerik:</label>
            <input type="text" v-model="icerik"/>
            <button>Güncelle</button>
        </form>  
    </div>
    
</template>
<script>
export default{
    props:['id'],
    data(){
        return{
            baslik:'',
            icerik:''
        }
    }
}
</script>