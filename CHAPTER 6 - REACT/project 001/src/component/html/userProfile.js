import { useParams } from "react-router-dom";

function UserProfile() {
    const {id} = useParams();
    return (
        <div>
            <h1>User Profile</h1>
            <p>This is the user profile of {id}.</p>
        </div>
    )
}
export default UserProfile;