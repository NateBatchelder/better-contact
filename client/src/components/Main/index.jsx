import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Main () {
  return (
    <>
      <Header />
      <main>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1>Main</h1>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}