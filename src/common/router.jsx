import {
    createBrowserRouter,
} from "react-router-dom";
import About from "../containers/About";
import Profile from "../containers/Profile";
import Root from "../containers/Root";
import Users from "../containers/Users";

export const appRoutes = {
    root: {
        index: '/'
    },
    profile: {
        index: '/profile',
        path: '/profile/:userId'
    },
    users: {
        index: '/users'
    },
    about: {
        index: '/about'
    }
}

const router = createBrowserRouter([
    {
        path: appRoutes.root.index,
        element: <Root />,
    },
    {
        path: appRoutes.profile.path,
        element: <Profile />,
    },
    {
        path: appRoutes.users.index,
        element: <Users />,
    },
    {
        path: appRoutes.about.index,
        element: <About />,
    },
]);

export default router