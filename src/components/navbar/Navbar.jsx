import "./navbar.scss";

export default function NavBar() {
  const brandName = "Natalie Karneef Meditation";
  const home = "Home";
  const individual = "Individual";
  const group = "Group";
  const corporate = "Corporate";
  const about = "About";
  const contact = "Contact";
  return (
    <nav id="navbar" class="navbar navbar-dark navbar-expand-md py-0 fixed-top">
      <a href="#home" class="navbar-brand">
        {brandName}
      </a>
      <button
        class="navbar-toggler"
        data-toggle="collapse"
        data-target="#navLinks"
        aria-label="toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navLinks">
        <ul class="navbar-nav">
          <li>
            <a href="" class="nav-link">
              {individual}
            </a>
          </li>
          <li>
            <a href="" class="nav-link">
              {group}
            </a>
          </li>
          <li>
            <a href="" class="nav-link">
              {corporate}
            </a>
          </li>
          <li>
            <a href="" class="nav-link">
              {contact}
            </a>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link">
              {about}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
