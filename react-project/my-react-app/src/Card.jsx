import profilePic from './assets/mass.jpeg'

function Card(){
    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Akash Pandiya</h2>
            <p className="card-text">I'm Mca student</p>
        </div>
    );
}
export default Card