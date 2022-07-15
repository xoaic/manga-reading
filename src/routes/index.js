import { HeaderOnly } from "../layouts"
import config from "../config"
import Home from '../pages/Home'
import Profile from "../pages/Profile"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import Search from "../pages/Search"
import Upload from "../pages/Upload"

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.privacy_policy, component: PrivacyPolicy, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly }
]

const privateRoutes = [
]

export { publicRoutes, privateRoutes }