

function UserGreeting(props) {
  const welcomeMessage = (
    <h1 className="welcome-message">Welcome {props.username}</h1>
  );
  const loginMessage = (
    <h1 className="login-prompt">Please log in to continue</h1>
  );

  return props.isLoggedIn ? welcomeMessage : loginMessage;
}

export default UserGreeting;
