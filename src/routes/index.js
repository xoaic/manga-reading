import { HeaderOnly } from "../components/Layout";

import Home from '../pages/Home';
import Profile from "../pages/Profile";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/privacy-policy', component: PrivacyPolicy, layout: HeaderOnly }
]

const privateRoutes = [
    { path: '/profile', component: Profile }
]

export { publicRoutes, privateRoutes }