import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import UserContext from 'context/UserContext'
import Loading from '../Loading/index'
import './Userbar.css'

export default function UserBar (props) {
    const { notifications } = useContext(UserContext)
    const { sidebarShow, setSidebarShow } = useContext(UserContext)
    const [ showDropdown, setShowDropdown ] = useState(false)
    const [ loadingMsg, setLoadingMsg ] = useState(true)
    const [ messagesTitle, setMessagesTitle ] = useState({})

    useEffect(() => {
      if (showDropdown) {
        axios.get('http://localhost:4000/api/notifications/last/', {
                    headers: {
                        Authorization: 'Bearer ' + props.token
                    }
                }).then(res => {
                  setMessagesTitle(res.data)
                  setLoadingMsg(false)
                }).catch(err => {
                    console.log(err)
                })
      }
      console.log(messagesTitle)
    }, [showDropdown, props.token])

    const showMenu = () => {
      setSidebarShow(!sidebarShow)
    }

    const iconActive = () => {
      setShowDropdown(!showDropdown)
    }

    return (
      <div className="user-bar">
        <div className="item">
          <div className="icon" onClick={iconActive}>
            <div>
              <span className="material-icons">notifications_none</span>
              <p className={
                notifications !== 0
                  ? 'notifications'
                  : ''
              }>
                {notifications !== 0
                  ? notifications
                  : ''
                }
              </p>
            </div>
          </div>
          <div 
            className={showDropdown ? "close-ul" : ""} 
            onClick={() => setShowDropdown(!showDropdown)}>
          </div>
          <ul className={showDropdown ? "active" : ""}>
            {
              loadingMsg
                ? <Loading noBackground={true} black={true}/>
                : <>
                  {messagesTitle.map(msgTitle => (
                      <li key={msgTitle._id}>
                        {console.log(msgTitle)}
                        <p><span className="material-icons">mail</span> {msgTitle.title}</p>
                        <h5>De: {`${msgTitle.transmitter.lastname} ${msgTitle.transmitter.firstname}`}</h5>
                      </li>
                  ))}
                  <li>
                    <h5>Ver todos los mensajes</h5>
                  </li>
                </>
            }
          </ul>
          <div className="top-arrow"></div>
        </div>
        <div className="item tune-icon">
          <div className="icon">
            <span className="material-icons">tune</span>
          </div>
        </div>
        <div className="item menu-icon">
          <div className="icon" onClick={showMenu}>
            <span className={
              sidebarShow
                ? 'smaller-menu-icon active'
                : 'smaller-menu-icon'
            }></span>
          </div>
        </div>
      </div>
    );
}