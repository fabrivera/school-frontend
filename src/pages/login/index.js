import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import login from 'services/login'
import Cookies from 'js-cookie'
import Loading from 'components/Loading'
//import UserContext from '../../context/UserContext'
import './login.css'

//components
import FirstLogin from 'components/Login/firstLogin'
import Relogin from 'components/Login/relogin'

export default function Login() {
    let history = useHistory()
    const [loading, setLoading] = useState(true)
    const [visibility, setVisibility] = useState(false)
    const [blur, setBlur] = useState('login-background')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [adMessage, setAd] = useState('')
    const [relogin, setRelogin] = useState(false)
    const [userInfo, setUserInfo] = useState({
        name: '',
        imgPath: ''
    })

    useEffect(() => {
        const token = Cookies.get('__uuid')
        const load = new Promise(() => {
            if (token !== undefined) {
                const splitedToken = token.split('.')
                const { exp, name, imgPath, username } = JSON.parse(atob(splitedToken[1]))
                if (exp < (new Date().getTime() + 1) / 1000) {
                    setUsername(decodeURIComponent(escape(username)))
                    setRelogin(true)
                    setUserInfo({
                        name: decodeURIComponent(escape(name)),
                        imgPath
                    })
                } else {
                    history.push('/')
                }
            }
        })
        load.then(
            setLoading(false)
        )
    }, [history])

    const addBlur = () => {
        setBlur(`${blur} blur`)
    }
    const showPassword = () => {
        setVisibility(!visibility)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setAd('')
        const credentials = {
            username,
            password
        }
        login(credentials)
            .then(result => {
                if (result.status === 202) {
                    Cookies.set('__uuid', result.data.token, { expires: 365})
                    history.push('/')
                } else {
                    setAd(result.data.message)
                }
            })
    }

    const removeUser = () => {
        Cookies.remove('__uuid')
        setRelogin(false)
    }

    return <>
        {loading
            ? <Loading />
            : <>
                <div className="bg-back"></div>
                <div className={blur} ></div>
                <header>

                </header>
                <div className="login-container">
                    <div className="filter"></div>
                    <form onSubmit={handleSubmit}>
                        <div className="get-password">
                            {relogin
                                ? <Relogin user={userInfo} />
                                : <FirstLogin
                                    addBlur={addBlur}
                                    username={username}
                                    setUsername={setUsername}
                                />
                            }
                            <div>
                                <input
                                    className="input input-mw pr-200"
                                    type={visibility
                                        ? 'text'
                                        : 'password'
                                    }
                                    placeholder="Clave"
                                    value={password}
                                    onClick={addBlur}
                                    onChange={e => setPassword(e.target.value)}
                                />
                                <span
                                    className="material-icons pointer b-tranparent gray rounded eye"
                                    onClick={showPassword}>
                                    {visibility
                                        ? 'visibility'
                                        : 'visibility_off'
                                    }
                                </span>
                            </div>
                            <div className={
                                adMessage !== ''
                                    ? 'login-ad'
                                    : ''
                            }>
                                <p>{adMessage}</p>
                            </div>
                            <button className="btn btn-primary btn-mw rounded mb-50">Iniciar</button>
                            <br />
                            <Link to='/' className="link">¿Olvidé mi {relogin ? '' : 'usuario o'} contraseña?</Link>
                        </div>
                    </form>
                </div>
                <footer className="login-footer">
                    {relogin
                        ? <button
                            className="btn b-tranparent btn-primary semi-rounded"
                            onClick={removeUser}>
                            <span className="material-icons">people_alt</span> Cambiar usuario
                        </button>
                        : ''
                    }
                    <button className="btn b-tranparent btn-primary semi-rounded">
                        <span className="material-icons">help</span> Ayuda
                    </button>
                </footer>
            </>
        }
    </>
}