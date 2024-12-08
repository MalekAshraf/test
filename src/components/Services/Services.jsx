import "./Services.module.css";

const Services = () => {
  return (
    <>
      <div className="  container bg-dark-subtle my-2 ">
        <h2>Munnich.It Services</h2>
        <div className="justify-content-center align-items-center ">
          <h4> Detailed description of services, which might include:</h4>
          <ul className=" list-unstyled">
            <li>IT Consulting</li>
            <li>Software Development</li>
            <li>Cloud Solutions</li>
            <li>Web Hosting</li>
            <li>Cybersecurity</li>
          </ul>
        </div>
      </div>
      <section id="servSec">
        <div className="container">
          <div className="services text-center">
            <h2>Services</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, delectus.
            </p>
          </div>
        </div>
        <div className="servItems">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 my-4">
                <div className="servItem text-center p-4 shadow-lg rounded-4">
                  <span className="icon">
                    <i className="fa-solid fa-chalkboard" />
                  </span>
                  <h3 className="my-3 text-uppercase">web Design</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, numquam? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quo, numquam?
                  </p>
                </div>
              </div>
              <div className="col-lg-4 my-4">
                <div className="servItem text-center p-4 shadow-lg rounded-4">
                  <span className="icon">
                    <i className="fa-solid fa-code" />
                  </span>
                  <h3 className="my-3 text-uppercase">web Developement</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, numquam? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quo, numquam?
                  </p>
                </div>
              </div>
              <div className="col-lg-4 my-4">
                <div className="servItem text-center p-4 shadow-lg rounded-4">
                  <span className="icon">
                    <i className="fa-solid fa-icons" />
                  </span>
                  <h3 className="my-3 text-uppercase">Photography</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, numquam? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quo, numquam?
                  </p>
                </div>
              </div>
              <div className="col-lg-4 my-4">
                <div className="servItem text-center p-4 shadow-lg rounded-4">
                  <span className="icon">
                    <i className="fa-solid fa-envelopes-bulk" />
                  </span>
                  <h3 className="my-3 text-uppercase">Responsive Design</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, numquam? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quo, numquam?
                  </p>
                </div>
              </div>
              <div className="col-lg-4 my-4">
                <div className="servItem text-center p-4 shadow-lg rounded-4">
                  <span className="icon">
                    <i className="fa-solid fa-bezier-curve" />
                  </span>
                  <h3 className="my-3 text-uppercase">Graphic Design</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, numquam? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quo, numquam?
                  </p>
                </div>
              </div>
              <div className="col-lg-4 my-4">
                <div className="servItem text-center p-4 shadow-lg rounded-4">
                  <span className="icon">
                    <i className="fa-solid fa-money-bill-trend-up" />
                  </span>
                  <h3 className="my-3 text-uppercase">Marketing Services</h3>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, numquam? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quo, numquam?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
