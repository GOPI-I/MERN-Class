
function UserGreeting(props){
    // if(props.isLoogedIn){
    //     return <h2>Welocme {props.username}</h2>

    // }
    // return <h2> Please Login {props.username}</h2>

    return (props.isLoggedIn ? 
    <h2 className="welcome-message">Welocme {props.username}</h2> :
     <h2 className="login-prompt"> Please Login {props.username}</h2> );
   
}
export default UserGreeting