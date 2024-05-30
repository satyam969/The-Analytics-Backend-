
 const Home = () => {
    return (
      <>
        <main>
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="hero-content">
                <p>We are the World Best IT Company</p>
                <h1>Welcome to The Analytics</h1>
                <p>
                  Are you ready to take your business to the next level with
                  cutting-edge IT solutions? Look no further! At The Analytics,
                  we specialize in providing innovative IT services and solutions
                  tailored to meet your unique needs.
                </p>
                <div className="btn btn-group">
                  <a href="/contact">
                    <button className="btn">connect now</button>
                  </a>
                  <a href="/services">
                    <button className="btn secondary-btn">learn more</button>
                  </a>
                </div>
              </div>
  
           
            </div>
          </section>
        </main>
  
       
  
        {/* 3rd section  */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* hero images  */}

  
            <div className="hero-content">
              <p>We are here to help you</p>
              <h1>Get Started Today</h1>
              <p>
                Ready to take the first step towards a more efficient and secure
                IT infrastructure? Contact us today for a free consultation and
                let's discuss how The Analytics can help your business thrive in
                the digital age.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };


  export default Home