import { useUser } from "../context/UserContext";
import { useAuth } from "../context/AuthContext";
import { getUserSuggestions } from "../utils/utilityFunctions";

export function RightNav() {
    const {users:allUsers, isLoading} = useUser();
    const {user:authUser} = useAuth();
   
    const suggestionList=getUserSuggestions(allUsers,authUser);
    
  return (
    <>
      <div className="md:min-h-screen fixed ">
        <div>
          <h1 className="font-bold text-xl">Suggestions for you</h1>
        </div>
        <div>
          
        </div>
        
      </div>
    </>
  );
}
