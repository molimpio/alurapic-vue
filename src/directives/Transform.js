import Vue from 'vue';

//para usar usa v-meu-transform
Vue.directive('meu-transform', {

  // el => elemento DOM
  // binding => pega valores passados pela diretiva
  // vnode =>
  bind(el, binding, vnode){

      let current = 0;

      el.addEventListener('dblclick', function(){

        let incremento = 90;
        let animate = false;

        if(binding.value) {
          incremento = binding.value.incremento;
          animate = binding.value.animate;
        }

        current+=incremento;
        el.style.transform = `rotate(${current}deg)`;

        if(animate) el.style.transition = 'transform 0.5s';
      });
  }

});
