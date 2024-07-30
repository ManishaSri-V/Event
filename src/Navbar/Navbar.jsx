import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Add Event</Link>
          </li>
          <li>
            <Link to="/eventlist">Event List</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
