import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="main-nav">
      <ul>
        <li>
          <Link to="/" className="btn-nav">
            <strong>O projekcie</strong>
          </Link>
        </li>
        <li className="main-nav-list-item">
          <Link to="/statistics" className="btn-nav">
            <strong>Statystyki</strong>
          </Link>
        </li>
        <li className="main-nav-list-item">
          <Link to="/analysis-charts" className="btn-nav">
            <strong>Analiza i wykresy</strong>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
