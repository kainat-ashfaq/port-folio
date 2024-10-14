function NavBar() {
    return(
        <>
<nav className="navbar navbar-expand-lg fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#">
      <h1 className="logo">
        <span className="port">kai</span>nat
      </h1>
    </a>
    <button
      className="navbar-toggler bg-black"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarScroll"
      aria-controls="navbarScroll"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon bg-white text-white"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul
        className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll"
        style={{ '--bs-scroll-height': '100px' }}
      >
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#skills" >

            Skills
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#Projects">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#contact">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

{/* kainat */}
<div className="container text-center">
      <div className="row align-items-start">
        <div className="col-12 col-sm-6">
          <h1 className="home-heading hello">Hi , it's <span className="kainat"> Kainat </span> </h1>
          {/* <h1 className="home-name">KAINAT ASHFAQ</h1> */}
          {/* <h2 className="home-dev">I'M  <span className="developer"> Developer </span>  </h2>  */}
          <div className="dev-animation text-start">
            <span className="text-p first-text">I' am</span>
            <span className="text-p sec-text"> Frontend Developer</span>

          </div>
          <p className="para">
          I am a passionate front-end developer with a strong foundation in HTML, CSS, and JavaScript, along with hands-on experience in frameworks like React and Bootstrap. I enjoy crafting responsive, user-friendly websites and applications that offer seamless experiences across all devices.  
          </p>
          <div className="social-icons text-start">
            <a href="https://www.linkedin.com/in/kainat-ashfaq/">
        
            <i className='bx bxl-linkedin'></i>
            </a>
            <a href="https://www.instagram.com/kainat._.ashfaq/">
            <i className='bx bxl-instagram' ></i>
            </a>
            <a href="https://github.com/kainat-ashfaq">
            <i className='bx bxl-github' ></i>
            </a>
          
          <button className="hire">Download CV</button>
          </div>
          <br />
        </div>
        <div className="col-12 col-sm-6 girl text-center">
          <div className="me-div">
            <img 
              src="img/me.png" 
              className="me" 
              alt="Kainat Ashfaq" 
            />
          </div>
        </div>
      </div>
    </div>
        
        </>
    )
}
export default NavBar