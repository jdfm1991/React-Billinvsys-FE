import Spinner from "react-bootstrap/Spinner";

const LoadingMode = () => {
    return(
        <div className="justify-content-center align-items-center p-5">
            <Spinner animation="border" variant="success" role="status" style={{width:'100px', height:'100px'}}>
                <span className="visually-hidden">Loader...</span>
            </Spinner>
        </div>
        
    )
}

export default LoadingMode