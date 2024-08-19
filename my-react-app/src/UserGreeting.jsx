// conditional rendering

import PropTypes from 'prop-types'

function UserGreeting(props) {
    /*if (props.isLoggedIn)
        return (<><h2>Welcome: {props.username}</h2></>);
    return (
        <>
            <h2>Please login to continue</h2>
        </>
    ); */
    const welcomemessage = <h2 className="welcome-message">Welcome: {props.username}</h2>
    const loginprompt = <h2 className="login-prompt">Please Login to continue</h2>
    return (
        props.isLoggedIn ? welcomemessage: loginprompt
        
    );
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultprops = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreeting