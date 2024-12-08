import "./Blog.module.css";
const Blog = () => {
  return (
    <>
      <div className="  container bg-dark-subtle my-2 ">
        <h2>Munnich.It Blog</h2>
        <div className="justify-content-center align-items-center ">
          <h4> Detailed description of blog, which might include:</h4>
          <ul className=" list-unstyled">
            <li>Articles, news, and updates about the IT industry.</li>
            <li>Educational content, tutorials, or how-tos.</li>
          </ul>
        </div>
      </div>
      <section id="sBlog" className="m-0 ">
        <div className="container">
          <div className="blog text-center">
            <h2>Blog</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, delectus.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="blogItems shadow-lg my-3">
                <div>
                  <a href className="text-decoration-none">
                    <div className="img-div">
                      <img
                        src="./images/post-1.jpg"
                        alt="project_1"
                        className="w-100"
                      />
                      <div className="blogTextH">
                        <span>Travel</span>
                      </div>
                    </div>
                  </a>
                  <div className="blogText  p-3 mt-3">
                    <div>
                      <h3>
                        <a href className="text-decoration-none">
                          See more ideas about Travel
                        </a>
                      </h3>
                      <p className="lead">
                        Lorem ipsum dolor sit amet consectetur elit adipisicing
                        elit.Blanditiis animi explicabo? Placeat blanditiis quos
                        officia. Blanditiis animi explicabo?
                      </p>
                    </div>
                  </div>
                  <div className="blogNameTime">
                    <div className="d-flex  justify-content-lg-start align-items-center">
                      <div className="w-25 ">
                        <img
                          src="./images/testimonial-2.jpg"
                          alt
                          className="w-75 rounded-5 "
                        />
                      </div>
                      <a href className="text-decoration-none">
                        {" "}
                        <span>Morgan Freeman</span>
                      </a>
                    </div>
                    <div className=" clock d-flex  justify-content-lg-start align-items-center">
                      <span className="mx-1">
                        <i className="fa-regular fa-clock" />
                      </span>
                      <span> 10 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blogItems shadow-lg my-3">
                <div>
                  <a href className="text-decoration-none">
                    <div className="img-div">
                      <img
                        src="./images/post-2.jpg"
                        alt="project_2"
                        className="w-100"
                      />
                      <div className="blogTextH">
                        <span>Web Design</span>
                      </div>
                    </div>
                  </a>
                  <div className="blogText  p-3 mt-3">
                    <div>
                      <h3>
                        <a href className="text-decoration-none">
                          See more ideas about Travel
                        </a>
                      </h3>
                      <p className="lead">
                        Lorem ipsum dolor sit amet consectetur elit adipisicing
                        elit.Blanditiis animi explicabo? Placeat blanditiis quos
                        officia. Blanditiis animi explicabo?
                      </p>
                    </div>
                  </div>
                  <div className="blogNameTime">
                    <div className="d-flex  justify-content-lg-start align-items-center">
                      <div className="w-25 ">
                        <img
                          src="./images/testimonial-4.jpg"
                          alt
                          className="w-75 rounded-5 "
                        />
                      </div>
                      <a href className="text-decoration-none">
                        {" "}
                        <span>Mohga Alpy</span>
                      </a>
                    </div>
                    <div className=" clock d-flex  justify-content-lg-start align-items-center">
                      <span className="mx-1">
                        <i className="fa-regular fa-clock" />
                      </span>
                      <span> 10 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blogItems shadow-lg my-3">
                <div>
                  <a href className="text-decoration-none">
                    <div className="img-div">
                      <img
                        src="./images/post-3.jpg"
                        alt="project_3"
                        className="w-100"
                      />
                      <div className="blogTextH">
                        <span>Web Design</span>
                      </div>
                    </div>
                  </a>
                  <div className="blogText  p-3 mt-3">
                    <div>
                      <h3>
                        <a href className="text-decoration-none">
                          See more ideas about Travel
                        </a>
                      </h3>
                      <p className="lead">
                        Lorem ipsum dolor sit amet consectetur elit adipisicing
                        elit.Blanditiis animi explicabo? Placeat blanditiis quos
                        officia. Blanditiis animi explicabo?
                      </p>
                    </div>
                  </div>
                  <div className="blogNameTime">
                    <div className="d-flex  justify-content-lg-start align-items-center">
                      <div className="w-25 ">
                        <img
                          src="./images/testimonial-2.jpg"
                          alt
                          className="w-75 rounded-5 "
                        />
                      </div>
                      <a href className="text-decoration-none">
                        {" "}
                        <span>Morgan Freeman</span>
                      </a>
                    </div>
                    <div className=" clock d-flex  justify-content-lg-start align-items-center">
                      <span className="mx-1">
                        <i className="fa-regular fa-clock" />
                      </span>
                      <span> 10 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
