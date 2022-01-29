import { useContext } from 'react'
import RouteContext from 'context/RouteContext'
import './RouteViewer.css'

export default function CourseRoute() {
    const { route } = useContext(RouteContext)

    return <div className="route-content">
        {route.length > 0
            ? <div className="route">
                    {route.map((result, key) => <div key={key}><span>{result}</span></div>)}
            </div>
            : <></>
        }
    </div>
}