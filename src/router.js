import Vue from 'vue'
import VueRouter from 'vue-router'

import MainList from './components/MainList.vue'
import CreateUpdate from './components/CreateUpdate.vue'

Vue.use(VueRouter)

//VueRouter 인스턴스 생성하기
const router = new VueRouter({
    routes: [
        {path: '/', component : MainList},
        {path: '/create',component: CreateUpdate},
        {path: '/update',component: CreateUpdate}
    ]
});

export default router