function Contact() {
return(
    <>
    <section className="contact">
<h2 className="con-head">
    Contact <span className="con-me">Me</span>
</h2>
<form action="">
<div className="input-grp">
    <div className="input-box">
<input type="text" placeholder="Full Name" />
<input type="email" name="" id="" placeholder="Email" />
    </div>
    <div className="input-box">
        <input type="number" placeholder="Phone Number" />
    </div>
</div>
<div className="input-grp2">
    <textarea name="" cols={30} rows={10} placeholder="Your Message" id=""></textarea>
    <input type="submit" name="" id="" className="hire" />
</div>
</form>
    </section>
    <div className="container text-center footer">
  <div className="row align-items-start justify-content-center">
    <div className="col-12 col-sm-4">
      <div className="d-flex justify-content-center">
        <div>
          <i className="fa-solid fa-envelope fa-2xl" style={{ color: '#00ffee' }}></i>
        </div>
        <div>
          <h3 className="contact-me-heading ps-3 text-white">Email</h3>
        </div>
      </div>
      <p className="contact-content">kainat.ashfaq135@gmail.com</p>

      <br /><br />

      <div className="d-flex justify-content-center">
        <div>
          <i className="fa-sharp fa-shake fa-solid fa-phone fa-2xl" style={{ color: ' #00ffee' }}></i>
        </div>
        <div>
          <h3 className="contact-me-heading ps-3">Phone</h3>
        </div>
      </div>
      <p className="contact-content">03313282986</p>

      <br /><br />

      <div className="d-flex justify-content-center">
        <div>
          <i className="fa-solid fa-location-dot fa-2xl" style={{ color: ' #00ffee' }}></i>
        </div>
        <div>
          <h3 className="contact-me-heading ps-3">Country</h3>
        </div>
      </div>
      <p className="contact-content">Pakistan</p>

      <br />
      
      

     
    
    </div>
  </div>

  <br />
  <h3 className="text-white text-center">
    © 2023 Copyright: Designed by <em>KAINAT ASHFAQ</em>
  </h3>
</div>

    </>
)


    
}
export default Contact