import profilePic from './assets/download.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={ profilePic } alt="Profile Picture" ></img>
            <h2 className="card-title">Leo Inferior</h2>
            <p className="card-text">I am a noobbb</p>
        </div>
    );
}

export default Card