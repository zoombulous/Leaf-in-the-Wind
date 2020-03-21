import Vue from 'vue'
import App from './App.vue'
import 'vue-dice-roller/dist/vue-dice-roller.css'
import VueDiceRoller from 'vue-dice-roller/dist/vue-dice-roller.common'

Vue.config.productionTip = false

Vue.use(VueDiceRoller)

new Vue({
  render: h => h(App),
}).$mount('#app')
