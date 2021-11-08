import "./Join.scss";
function Join() {
  return (
    <div className="join-wrapper">
      <div className="join-title">
        <span className="cine"> Cine</span>
        <span className="nights"> Nights.</span>
      </div>
      <div className="join-form">
        <span>Welcome</span>

        <input
          type="text"
          name="username"
          placeholder="User Name"
          id="username"
        />

        <input type="text" name="room" placeholder="Room ID" id="room" />

        <button type="submit">Enter</button>
      </div>
    </div>
  );
}

export default Join;
