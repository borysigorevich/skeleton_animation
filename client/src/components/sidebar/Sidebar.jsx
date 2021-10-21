import {
    Menu,
    Home,
    Explore,
    Subscriptions,
    VideoLibrary,
} from "@material-ui/icons";
// import Skeleton from "../skeleton/Skeleton";
import "./sidebar.css";
import Skeleton from "../skeleton/Skeleton";

const Sidebar = ({isLoading}) => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <Menu/>
                {isLoading
                    ? <Skeleton type={'sidebar'}/>
                    : <>
                        <div className="sidebarItem active">
                            <Home/>
                            <span>Home</span>
                        </div>
                        <div className="sidebarItem">
                            <Explore/>
                            <span>Explore</span>
                        </div>
                        <div className="sidebarItem">
                            <Subscriptions/>
                            <span>Subscriptions</span>
                        </div>
                        <div className="sidebarItem">
                            <VideoLibrary/>
                            <span>Library</span>
                        </div>
                    </>}
                {/*<div className="sidebarItem active">*/}
                {/*    <Home/>*/}
                {/*    <span>Home</span>*/}
                {/*</div>*/}
                {/*<div className="sidebarItem">*/}
                {/*    <Explore/>*/}
                {/*    <span>Explore</span>*/}
                {/*</div>*/}
                {/*<div className="sidebarItem">*/}
                {/*    <Subscriptions/>*/}
                {/*    <span>Subscriptions</span>*/}
                {/*</div>*/}
                {/*<div className="sidebarItem">*/}
                {/*    <VideoLibrary/>*/}
                {/*    <span>Library</span>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Sidebar;
