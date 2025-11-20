function Navbar() {
  return (
    <nav className="navbar">
      <h1>Udemy</h1>
      <input placeholder="Search for anything" />
      <div className="nav-links">
        <span>Plans & Pricing</span>
        <span>Udemy Business</span>
        <span>Teach on Udemy</span>
        <button>Log in</button>
        <button className="signup">Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;
