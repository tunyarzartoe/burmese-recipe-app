import React from "react";

const Navbar = () => {
  return (
    <nav className="app-navbar shadow-sm">
      <div className="container">
        <div className="d-flex align-items-center">
          <span className="brand-mark" aria-hidden>
            🍲
          </span>
          <a className="navbar-brand fw-bold" href="/">
            Burmese Recipe App
          </a>
        </div>

        {/* <div className="search-wrapper">
          <form className="d-flex w-100" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for recipes..."
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div> */}

        {/* <div className="d-flex align-items-center gap-3">
          <a className="nav-link" href="/saved" style={{padding:'.35rem .6rem'}}>
            Saved Recipes
          </a>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
