<template>
  <div>
    <h1>{{ titulo }}</h1>
    <img :src="foto.url" :alt="foto.titulo" />
  </div>
</template>

<script>
export default {

  data(){
    return {
      titulo: 'Alurapic',
      foto: {
        url: 'http://blog.emania.com.br/content/uploads/2016/01/cachorro-curiosidades.jpg',
        titulo: 'Cachorro'
      }
    }
  }
}
</script>

<style>

</style>
