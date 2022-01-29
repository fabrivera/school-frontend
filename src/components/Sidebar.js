// Libraries
import { useContext } from 'react'
import UserContext from 'context/UserContext'
import { useHistory } from 'react-router-dom'
import { addShowClass } from 'framework/css-framework'
import Cookies from 'js-cookie'

export default function Sidebar(params) {
    let history = useHistory()
    const { sidebarShow } = useContext(UserContext)

    const logout = () => {
        Cookies.remove('__uuid')
        history.push('/login')
    }

    return (
        <div className="sidebar-container">
            <div className={
                sidebarShow
                ? 'sidebar showSidebar'
                : 'sidebar'
            }>
                <div className="logo divide">
                    <img src={''} className="logo-img" alt="" />
                </div>
                <div className="profile divide">
                    <div>
                        <button className="show-btn no-bg" onClick={addShowClass}>
                            <img src={params.user.imgPath} className="profile-img" alt="" />
                            {params.user.name}
                            <span className="material-icons arrow">arrow_right</span>
                        </button>
                        <div className="dropdown border-none">
                            <ul>
                                <li className="dropdown-link">
                                    <button className="li-margin">Información</button>
                                </li>
                                <li className="dropdown-link">
                                    <button className="li-margin">Cambiar Contraseña</button>
                                </li>
                                <li className="dropdown-link">
                                    <button className="li-margin" onClick={logout}>Salir</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="list">
                    <ul>
                        <li>
                            <button className="show-btn" onClick={addShowClass}>
                                <span className="material-icons">school</span>
                                Curso
                                <span className="material-icons arrow">arrow_right</span>
                            </button>
                            <div className="dropdown">
                                <ul>
                                    <li className="dropdown-link">
                                        <button className="li-margin"><span className="material-icons">person</span>Alumnos</button>
                                    </li>
                                    <li className="dropdown-link">
                                        <button className="li-margin"><span className="material-icons">class</span>Materias</button>
                                    </li>
                                    <li className="dropdown-link">
                                        <button className="li-margin"><span className="material-icons">event_available</span>Inasistencias</button>
                                    </li>
                                    <li className="dropdown-link">
                                        <button className="li-margin"><span className="material-icons">thumb_up_alt</span>Conducta</button>
                                    </li>
                                    <li className="dropdown-link">
                                        <button className="li-margin"><span className="material-icons">content_paste</span>Calificaciones</button>
                                    </li>
                                    <li className="dropdown-link">
                                        <button className="li-margin"><span className="material-icons">record_voice_over</span>Comunicación Pedagógica</button>
                                    </li>
                                    <li className="dropdown-link">
                                        <button className="li-margin"><span className="material-icons">event_busy</span>Cierre de Periodo</button>
                                    </li>
                                    <li className="dropdown-link">
                                        <button className="li-margin"><span className="material-icons">list_alt</span>Listado</button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <button><span className="material-icons">folder_shared</span>Personal</button>
                        </li>
                        <li>
                            <button><span className="material-icons">question_answer</span> Comunicados</button>
                        </li>
                        <li>
                            <button className="show-btn" onClick={addShowClass}>
                                <span className="material-icons">tune</span>
                                Gestión
                                <span className="material-icons arrow">arrow_right</span>
                            </button>
                            <div className="dropdown">
                                <ul>
                                    <li className="dropdown-link">
                                        <button className="li-margin"><span className="material-icons">manage_accounts</span>Academica</button>
                                    </li>
                                    <li className="dropdown-link">
                                        <button className="li-margin"><span className="material-icons">settings</span>Plataforma</button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="separator"></div>
                <div className="sidebar-footer">
                    <h6>Creado por: <b>Creative Studio</b></h6>
                </div>
            </div>
        </div>
    )

}