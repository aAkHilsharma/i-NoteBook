export default function Alert(props){
    return (
        <div style={{height: "40px"}}>
            <div className="alert alert-primary" role="alert">
            <strong >{props.message}</strong>
            </div>
        </div>
    )
}