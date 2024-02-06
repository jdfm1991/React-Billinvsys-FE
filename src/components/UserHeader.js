import PropTypes from "prop-types";


const UserHeader = ( { title } ) => {
    return(
        <>
            <div className="justify-content-center align-items-center">
                <h1 className="text-center fw-bold"> { title } </h1>
            </div>
        </>
    )
}

UserHeader.propTypes = {
    title : PropTypes.string.isRequired
}

export default UserHeader