import './Loading.css'

export default function Loading() {
    return <>
        <div className="all-loading">
            <div className="loading-container">
                <div className="loading1"></div>
                <div className="loading2"></div>
                <div className="loading3"></div>
                <div className="logo aplastar">
                    <div className="logo1"></div>
                </div>
                <div className="logo">
                    <div className="logo2"></div>
                    <div className="logo3"></div>
                </div>
            </div>
            <h1>Cargando<span>.</span><span className="late1">.</span><span className="late2">.</span></h1>
        </div>
    </>
}