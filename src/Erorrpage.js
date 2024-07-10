import { Link } from "react-router-dom";

const Errorpage = () => {
    return (<div className="notfound">
        <h2>Sorry</h2>
        <p>That page don´t exist</p>
        <Link to="/">Back to homepage</Link>
    </div>);
}

export default Errorpage;