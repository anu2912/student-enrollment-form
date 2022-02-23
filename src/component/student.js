export const  Student = ({userData}) => {
    return <div className="Container">
        <div>
            <img alt='userImage' src={userData.imagelink} className='userImg'></img>
        </div>
        <div className="details">
          <p type='text' name='username' id='username'>Name:{userData.name}</p>
          <p type='text' name='email' id='email'>Email:{userData.email}</p>
          <p type='text' name='website' id='website'>Website:{userData.website}</p>
          <p type='text' name='gender' id='gender'>Gender:{userData.gender}</p>
          <p type='text' name='course' id='course'>Course:{userData.course}</p>
</div>
</div>
}
