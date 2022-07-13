import UserDetails from "components/userDetails";
import { useParams } from "react-router-dom";
export default function UserDetailsRoute() {
    const { userId } = useParams();
    return (
        <div>
            <h1>User Details</h1>
            {userId ? <UserDetails userId={userId} />: <p>No user id!</p>}
        </div>
    );
}