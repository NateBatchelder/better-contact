import React from "react";
import Nav from "../Nav/";

function Header() {
  return (
    <>
      <header>
        {/* <!-- Navbar --> */}
        <nav >
          <Nav />
        </nav>
        {/* <!-- Navbar --> */}

        {/* <!-- Jumbotron --> */}
        <div class="p-5 text-center bg-light">
          <h1 class="mb-3">Heading</h1>
          <h4 class="mb-3">Subheading</h4>
          <a class="btn btn-primary" href="" role="button">
            Call to action
          </a>
        </div>
        {/* <!-- Jumbotron --> */}
      </header>
    </>
  );
}

export default Header;
