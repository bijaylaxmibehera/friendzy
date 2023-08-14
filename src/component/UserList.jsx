import { useNavigate } from "react-router";


export function UserList({ user }) {
    const navigate=useNavigate();
  return (
    <>
      <div className="flex gap-2 items-center m-3 cursor-pointer border-b-[1px] pb-2 border-slate-300"  onClick={()=>navigate(`/profile/${user.username}`)}>
        <img src={user.profileAvatar} alt={user.username}  className="w-[40px] h-[40px]"/>
        <div className="text-sm">
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <p>@{user.username}</p>
        </div>
        
      </div>
    </>
  );
}
