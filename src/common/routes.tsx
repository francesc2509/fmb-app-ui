import About from "../about";
import Home from "../home";
import Skills from "../skills";

interface Route {
    path: string;
    label: string;
    icon: string;
    order?: number;
    element: JSX.Element;
    children?: Route[];
}

const routes: Route[] = [
    {
        path: '/home',
        label: 'Home',
        icon: 'fa-solid fa-house',
        element: <Home />
    },
    {
        path: '/skills',
        label: 'Skills',
        icon: 'fa-solid fa-user-graduate',
        element: <Skills />
    },
    {
        path: '/about',
        label: 'About',
        icon: 'fa-solid fa-address-book',
        element: <About />
    },
]

export default routes;