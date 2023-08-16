import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { usePost } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

export function MobileNav() {
  const { user } = useAuth();
  const { setShowModal } = usePost();
  const navigate = useNavigate();

  const { firstName, lastName, username, profileAvatar } = user;

  const getStyle = ({ isActive }) => ({
    color: isActive ? "red" : "",
    fontWeight: isActive?"bold":""
  });
  const getProfileStyle=({isActive})=>(
    {
        border:isActive ? "2px solid red":"",
        borderRadius:isActive?"50%":""
    }
  )
  return (
    <>
      <nav className="flex justify-between items-center w-[95vw] mx-auto p-3 text-xl">
        <NavLink to="/" style={getStyle}>
          <i class="fa fa-home" aria-hidden="true"></i>
        </NavLink>
        <NavLink  to="/explore"  style={getStyle}>
          {" "}
          <i class="fa fa-compass" aria-hidden="true"></i>
        </NavLink>
        <NavLink  to="/bookmark"  style={getStyle}>
          <i class="fa fa-bookmark-o" aria-hidden="true"></i>
        </NavLink>
        <NavLink onClick={() => setShowModal(true)}  style={getStyle}>
          <i class="fa fa-plus " aria-hidden="true"></i>
        </NavLink>
        <NavLink to={`/profile/${user?.username}`} style={{getProfileStyle}}>
            <img src={profileAvatar} alt={username} className="w-[30px] h-[30px]"/>
        </NavLink>
      </nav>
    </>
  );
}
