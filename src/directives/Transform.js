import Vue from 'vue';

//para usar usa v-meu-transform
Vue.directive('meu-transform', {

  bind(el, binding, vnode){

      console.log('diretiva associada');
      console.log(el);
  }

});
