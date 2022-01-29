import './Notifications.css'

export default function Notification () {
    return <>
        <div className="notification-content">
            <div className="notification-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwiNAL_MHz50uKF8BPgul8ZuH9StoLSRbn3dhwLhaeld2BIlbbQGQ0Y6AKgktVs0DWZjI&usqp=CAU" alt="" />
            </div>
            <div className="notification-info">
                <div className="notification-header">
                    Header
                </div>
                <div className="notification-body">
                    Body
                </div>
                <div className="notification-footer">
                    Footer
                </div>
            </div>
        </div>
    </>
}