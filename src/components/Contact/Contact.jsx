import "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <div className="  container bg-dark-subtle my-2 ">
        <h2>Munnich.It Contact</h2>
        <div className="justify-content-center align-items-center ">
          <h4> Detailed description of contact, which might include:</h4>
          <ul className=" list-unstyled">
            <li>IT Consulting</li>
            <li>Software Development</li>
            <li>Cloud Solutions</li>
            <li>Web Hosting</li>
            <li>Cybersecurity</li>
          </ul>
        </div>
      </div>
      <section id="sContact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 bg-white p-4">
              <div>
                <div className="contact">
                  <h5 className="text-capitalize">Send Message Us</h5>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="exampleFormControlInput1"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control rounded-0"
                    id="exampleFormControlInput1"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    id="exampleFormControlInput1"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control p-3 rounded-0"
                    id="exampleFormControlTextarea1"
                    placeholder="Message"
                    rows={5}
                    defaultValue={""}
                  />
                </div>
                <div className="col-auto text-center div-btn">
                  <button
                    type="submit"
                    className="btn btn-primary mb-3 btnsend rounded-5 shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 bg-white p-4">
              <div>
                <div className="contact">
                  <h5 className="text-capitalize">Get in Touch</h5>
                </div>
                <div>
                  <p className="lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                    nulla. Odio natus quaerat eveniet expedita reiciendis ipsam
                    omnis atque beatae?
                  </p>
                  <ul className="ulIcon_style list-unstyled ">
                    <li>
                      <span>
                        <i className="fa-solid fa-location-dot mx-2" />
                      </span>
                      329 Cairo, Egypt 2024
                    </li>
                    <li>
                      <span>
                        <i className="fa-solid fa-mobile-button mx-2" />
                      </span>
                      (+20) 1060423027
                    </li>
                    <li>
                      <span>
                        <i className="fa-regular fa-envelope mx-2" />
                      </span>
                      malekashraf1500@gmail.com
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className=" ul_socilalink list-unstyled d-flex justify-content-start align-items-center">
                    <li>
                      <a href className="text-decoration-none mx-2">
                        <span>
                          <i className="fa-brands fa-facebook" />
                        </span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href className="text-decoration-none  mx-2">
                        <span>
                          <i className="fa-brands fa-instagram" />
                        </span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href className="text-decoration-none  mx-2">
                        <span>
                          <i className="fa-brands fa-twitter" />
                        </span>{" "}
                      </a>
                    </li>
                    <li>
                      <a href className="text-decoration-none  mx-2">
                        <span>
                          <i className="fa-brands fa-linkedin" />
                        </span>{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
