import { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'

//components
import Loading from 'components/Loading'
import Sidebar from 'components/Sidebar'
import UserBar from 'components/UserBar'
import RouteViewer from 'components/RouteViewer'
import Notification from 'components/Notifications'
//import Welcome from 'components/Welcome'
import Profile from 'components/Profile'

//UserContext
import UserContext from 'context/UserContext'
import RouteContext from 'context/RouteContext'

//Stylesheet Cascade
import './Home.css'


export default function Home() {
    let history = useHistory()
    const { user, setUser } = useContext(UserContext)
    const { setRoute } = useContext(RouteContext)
    const { setNotifications } = useContext(UserContext)
    const [ token, setToken ] = useState('')
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        const cookieToken = Cookies.get('__uuid')
        if (cookieToken !== undefined) {
            setToken(cookieToken)
            const splitedToken = cookieToken.split('.')
            const { id, name, imgPath, username } = JSON.parse(atob(splitedToken[1]))
            setUser({
                id,
                name: decodeURIComponent(escape(name)),
                username: decodeURIComponent(escape(username)),
                imgPath
            })
            setLoading(false)
        } else {
            history.push('/login')
        }

    },[history, setUser])

    useEffect(() => {
        if (token !== '') {
                axios.get('http://localhost:4000/api/notifications/count/', {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                }).then(res => {
                    setNotifications(res.data)
                }).catch(err => {
                    console.log(err.response.data.error)
                    history.push('/login')
                })
        }
    }, [token,setNotifications, history])

    return <>
        {loading 
            ? <Loading />
            : <>
                <div className="body-container">
                    <Sidebar user={user} />
                    <div className="body">
                        <UserBar token={token}/>
                        <div className="content">
                            <RouteViewer />
                            
                            
                        </div>
                    </div>
                </div>
              </>
        }
    </>
}