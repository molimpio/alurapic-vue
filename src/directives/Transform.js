import Vue from 'vue';

//para usar usa v-meu-transform
Vue.directive('meu-transform', {

  // el => elemento DOM
  // binding => pega valores passados pela diretiva
  // vnode =>
  bind(el, binding, vnode){

      let current = 0;

      el.addEventListener('dblclick', function(){

        let incremento = binding.value || 90;        

        if(binding.modifiers.reverse){
          current-=incremento;
        }else{
          current+=incremento;
        }

        el.style.transform = `rotate(${current}deg)`;

        if(binding.modifiers.animate) el.style.transition = 'transform 0.5s';
      });
  }

});
