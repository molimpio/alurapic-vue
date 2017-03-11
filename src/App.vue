<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  data(){
    return {
      titulo: 'Alurapic',
      fotos: [
        {
          url: 'http://blog.emania.com.br/content/uploads/2016/01/cachorro-curiosidades.jpg',
          titulo: 'Cachorro'
        },
        {
          url: 'http://blog.emania.com.br/content/uploads/2016/01/cachorro-curiosidades.jpg',
          titulo: 'Cachorro'
        }
      ]
    }
  }
}
</script>

<style>

</style>
