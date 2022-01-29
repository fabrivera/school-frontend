import "./Loading.css"

export default function Loading(props) {
    return <>
        <div className={props.noBackground ? '' : 'loading'}>
            <div className="sk-chase">
                <div className={props.black ? 'sk-chase-dot black' : 'sk-chase-dot'}></div>
                <div className={props.black ? 'sk-chase-dot black' : 'sk-chase-dot'}></div>
                <div className={props.black ? 'sk-chase-dot black' : 'sk-chase-dot'}></div>
                <div className={props.black ? 'sk-chase-dot black' : 'sk-chase-dot'}></div>
                <div className={props.black ? 'sk-chase-dot black' : 'sk-chase-dot'}></div>
                <div className={props.black ? 'sk-chase-dot black' : 'sk-chase-dot'}></div>
            </div>
        </div>
    </>
}