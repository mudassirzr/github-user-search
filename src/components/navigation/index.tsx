import { Link } from "react-router-dom";
import classes from "components/navigation/navigation.module.css";

export default function Navigation(){
    return(
        <nav className={classes.navigation}>
            <Link to="/">Home</Link> |{" "}
            <Link to="history">History</Link>
        </nav>
    )
}