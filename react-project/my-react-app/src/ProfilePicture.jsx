
function ProfilePicture(){
    const imageUrl = './src/assets/mass.jpeg';
    const handleClick =(e) =>e.target.style.border = '20px solid blue';
    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);

}
export default ProfilePicture                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        