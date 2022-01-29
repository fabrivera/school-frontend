export default function FirstLogin({addBlur, username, setUsername}) {
    return <>
        <h2 className="login-title">Iniciar Sesión</h2>
        <div>
            <input 
                className="input input-mw pr-200" 
                type="text"
                placeholder="Usuario o email"
                value={username}
                onClick={addBlur}
                onChange={e => setUsername(e.target.value)}
            />
        </div>
    </>
}