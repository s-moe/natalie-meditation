import "./navbar.scss";

export default function NavBar() {
  const brandName = "Natalie Karneef Meditation";
  const individual = "Individual";
  const group = "Group";
  const corporate = "Corporate";
  const about = "About";
  const contact = "Contact";
  return (
    <nav
      id="navbar"
      className="navbar navbar-dark navbar-expand-md py-0 fixed-top"
    >
      <a href="/home" className="navbar-brand">
        {brandName}
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navLinks"
        aria-label="toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navLinks">
        <ul className="navbar-nav">
          <li>
            <a href="/individual" className="nav-link">
              {individual}
            </a>
          </li>
          <li>
            <a href="/group" className="nav-link">
              {group}
            </a>
          </li>
          <li>
            <a href="/corporate" className="nav-link">
              {corporate}
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">
              {about}
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-link">
              {contact}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
