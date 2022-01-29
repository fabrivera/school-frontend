import {useState, useEffect} from 'react'

export default function Relogin(props) {
    const [ image, setImage ] = useState('')
    useEffect(() => {
        props.user.imgPath === undefined || ''
            ? setImage('https://www.joyonlineschool.com/static/emptyuserphoto.png')
            : setImage(props.user.imgPath)
    }, [props])

    return <>
        <img src={image} alt="" className="login-picture" />
        <h3 className="login-name white">{props.user.name}</h3>
    </>
}