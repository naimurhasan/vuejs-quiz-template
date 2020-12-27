import HomePage from './pages/Home'
import QuizBoard from './pages/QuizBoard'
import NotFound from './pages/NotFound'
import VueRouter from 'vue-router'

const routes = [
    { path: '/', name: "home", component: HomePage },
    { path: '/quiz', name: "quiz", component: QuizBoard },
    { path: '/*', name: "errors", component: NotFound },
]

const router = new VueRouter({
    routes,
    mode: "history", // short for `routes: routes`,

})

export default router;