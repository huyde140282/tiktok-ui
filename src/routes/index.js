//public routes
import Home from '~/page/Home';
import { HeaderOnly } from '~/components/Layout'
import Upload from '~/page/Upload';
import Following from '~/page/Following';
import Search from '~/page/Search';
const publicRoutes = [
    {
        path: "/", component: Home
    },
    {
        path: "/following", component: Following
    },
    {
        path: "/upload", component: Upload, layout: HeaderOnly
    },
    {
        path: "/search", component: Search, layout: null
    }
]
const privateRoutes = []
export { publicRoutes, privateRoutes }
