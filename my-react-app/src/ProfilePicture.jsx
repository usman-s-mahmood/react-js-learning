
function ProfilePicture () {
    const imageUrl = './src/assets/thinkpad.jpg'
    const handleClick = (e) => {
        e.target.style.display = 'none';
    }
    return (
        <>
            <img 
                onClick={
                    (e ) => handleClick(e)
                }
             src={imageUrl} alt="" width="250px"/>
        </>
    );
}

export default ProfilePicture;

