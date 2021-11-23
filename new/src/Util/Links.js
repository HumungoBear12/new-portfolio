import About from '../Pages/About'
import Goals from '../Pages/Goals'
import Home from '../Pages/Home'
import Gallery from '../Pages/Gallery'
import Error from '../Components/Error'
export const Links = [
    {
        id:1,
        url:"/",
        text:"Home",
        page:<Home/>,
    },
    {
        id:2,
        url:"/About",
        text:"About",
        page:<About/>,
    },
    {
        id:3,
        url:"/Goals",
        text:"Goals",
        page:<Goals/>,
    },
    {
        id:4,
        url:"/Gallery",
        text:"Gallery",
        page:<Gallery/>,
    },
    {
        id: 5,
        url: "*",
        text: "Error",
        page: <Error />,
    },
]
export default Links