
import profilePic from './assets/thinkpad.jpg'

function Card(){
    return (
        <>
            <div className="card">
                <img src={profilePic} className='card-img' alt="" />
                <h2 className='card-title'>React Cards</h2>
                <p className='card-text'>This is an example of react card</p>
            </div>
        </>
    );
}

export default Card;