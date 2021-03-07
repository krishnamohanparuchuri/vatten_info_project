import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Login from '../views/Login.vue'

import PrivatePerson from '../views/PrivatePerson.vue'
import AnalysKatalog from '../views/Analyskatalog.vue'
import ContactUs from '../views/ContactUs.vue'
import RegisterAccount from '../views/RegisterAccount.vue'
import PaymentInfo from '../components/CardDetails/PaymentInfo.vue'
import Test from '../views/Test.vue'
import TestExpansion from '../components/testpages/TestExpansion.vue'
import LostLogin from '../views/LostLogin.vue'
import BestallSidan from '../views/BestallSidan.vue'
import InstruktionOchBlanketter from '../views/InstruktionOchBlanketter.vue'
import OmLaboratiet from '../views/OmLaboratiet.vue'
import HjalpMedDittVatten from '../views/HjalpMedDittVatten.vue'
import EnsikltDricksVatten from '../views/EnsikltDricksVatten.vue'
import AvloppsAnalyser from '../views/AvloppsAnalyser.vue'
import BygglovTillstand from '../views/BygglovTillstand.vue'
import VerksamhetSamfallighet from '../views/VerksamhetSamfallighet.vue'


Vue.use(VueRouter)

const routes = [

    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/lostlogin',
        name: 'LostLogin',
        component: LostLogin
    },

    {
        path: '/test',
        name: 'Test',
        component: Test
    },

    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/analyskatalog',
        name: 'AnalysKatalog',
        component: AnalysKatalog
    },
    {
        path: '/login/user',
        name: 'PrivateAccount',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/PrivateAccount.vue')
    },
    {
        path: '/private',
        name: 'PrivatePerson',
        component: PrivatePerson
    },
    {
        path: '/priser',
        name: 'TestExpansion',
        component: TestExpansion
    },
    {
        path: '/bestall',
        name: 'BestallSidan',
        component: BestallSidan
    },
    {
        path: '/blanketter',
        name: 'InstruktionOchBlanketter',
        component: InstruktionOchBlanketter
    },
    {
        path: '/omlab',
        name: 'OmLaboratiet',
        component: OmLaboratiet
    },
    {
        path: '/help',
        name: 'HjalpMedDittVatten',
        component: HjalpMedDittVatten
    },
    {
        path: '/enskilt_vatten',
        name: 'EnsikltDricksVatten',
        component: EnsikltDricksVatten
    },
    {
        path: '/avlopp_analyser',
        name: 'AvloppsAnalyser',
        component: AvloppsAnalyser
    },
    {
        path: '/bygglov_tillstand',
        name: 'BygglovTillstand',
        component: BygglovTillstand
    },
    {
        path: '/verksamhet',
        name: 'VerksamhetSamfallighet',
        component: VerksamhetSamfallighet
    },
    {
        path: '/contact',
        name: 'ContactUs',
        component: ContactUs
    },
    {
        path: '/register',
        name: 'RegisterAccount',
        component: RegisterAccount
    },
    {
        path: '/payment',
        name: 'PaymentInfo',
        component: PaymentInfo
    },
    {
        path: '/*',
        alias: '/'
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
