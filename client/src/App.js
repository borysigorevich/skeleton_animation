import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './app.css'
import Topbar from "./components/topbar/Topbar";
import Feed from "./components/feed/Feed";
import Sidebar from "./components/sidebar/Sidebar";
import {useEffect, useReducer, useState} from "react";
import axios from "axios";

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({})

    useEffect(() => {
        const getUser = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get('/api/user/1')
                setUser(response.data)
            } catch (err) {
                console.log(err)
            }
            setIsLoading(false)
        }
        getUser()
    }, [])

    return (
        <div className="container">
            <Router>
                <Switch>
                    <Route path={'/'}>
                        <Sidebar isLoading={isLoading}/>
                        <div className={'home'}>
                            <Topbar isLoading={isLoading} user={user}/>
                            <Feed user={user}/>
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
