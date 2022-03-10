import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";

function Profile() {
   
   const { user, isAuthenticated } = useAuth0();

   let navigate = useNavigate();
   
return (
   
isAuthenticated && (
      <article className='column'>
         {user?.picture && <img src={user.picture} alt={user?.name} />}
         <h2>{user?.name}</h2>
         <ul>
            {Object.keys(user).map((objKey, i) => <li key={i}>{objKey}: {user[objKey]}
            </li>)}
         </ul>
         <br>
         </br>
         <br>
         </br>
         
      <button onClick={() => {navigate("/form");}}> Tell us more, young bull!
      </button>
      </article>
     )
  )
}

export default Profile;
