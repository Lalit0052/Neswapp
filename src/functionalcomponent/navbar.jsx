import React, { useState } from 'react'
import "../assets/css/style.css"
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  let [input, setinput] = useState("None")

  function getdata(e) {
    setinput(e.target.value)

  }
  function search(e) {
    e.preventDefault()
    props.changeSearch(input)
    console.log(input);
  }


  return (
    <>
      <nav className="navbar navbar-expand-lg background sticky-top">
        <div className="container-fluid ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand text-light me-auto ms-auto p-2 fs-3" to="/latest">News Today</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                <Link className="nav-link active text-light" aria-current="page" to="/latest">All Latest</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link text-light" to="/sports">Sport</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link text-light" to="/crime">Crime</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link text-light" to="/politics">Politics</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link text-light" to="/education">Education</Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link text-light" to="/science">Science</Link>
              </li>
              <li className="nav-item  dropdown">
                <Link className="nav-link dropdown-toggle text-light" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More Category
                </Link>
                <ul className="dropdown-menu background">
                  <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                  <li><Link className="dropdown-item" to="/jokes">Jokes</Link></li>
                  <li><Link className="dropdown-item" to="/world">World</Link></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={search}>
              <input className="form-control me-2" onChange={getdata} name="input" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>


          </div>
          <div className="dropdown">
            <button className="btn  background ms-2 dropdown-toggle " type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span className="material-symbols-outlined">
                swipe_down_alt
              </span>
            </button>
            <ul className="dropdown-menu">
              <li><button className="dropdown-item" onClick={() => props.changelanguage("hi")}>HI</button></li>
              <li><button className="dropdown-item" onClick={() => props.changelanguage("en")}>ENG</button></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

