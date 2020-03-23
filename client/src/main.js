import Vue from 'vue'
import App from './App.vue'
import 'vue-dice-roller/dist/vue-dice-roller.css'
import VueDiceRoller from 'vue-dice-roller/dist/vue-dice-roller.common'
import BootstrapVue from 'bootstrap-vue'


Vue.config.productionTip = false

Vue.use(VueDiceRoller, BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
