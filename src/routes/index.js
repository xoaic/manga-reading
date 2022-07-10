import Home from '../pages/Home';
import Profile from "../pages/Profile";

const publicRoutes = [
    { path: '/', component: Home }
]

const privateRoutes = [
    { path: '/profile', component: Profile}
]

export { publicRoutes, privateRoutes }