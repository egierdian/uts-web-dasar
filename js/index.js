const bodyHome = () => {
    var bodyHome = document.getElementById('body-content');
    bodyHome.innerHTML =
        `
    <section id="home">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="card">
                        <img src="images/work-1.jpg" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div> 
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="card">
                        <img src="images/work-2.jpg" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div> 
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="card">
                        <img src="images/work-3.jpg" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div> 
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="card">
                        <img src="images/work-4.jpg" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div> 
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="card">
                        <img src="images/work-5.jpg" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div> 
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="card">
                        <img src="images/work-6.jpg" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>
    `;
}

const bodyContact = () => {
    var bodyContent = document.getElementById('body-content');
    bodyContent.innerHTML =
        `
    <section id="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-text">
                                <h4>Contact</h4>
                            </div>
                            <form>
                                <div class="form-group row">
                                    <label for="name_field" class="col-sm-5 col-form-label">Name <span class="text-danger">*</span></label>
                                    <div class="col-sm-7">
                                        <input type="text" class="form-control" id="name_field" placeholder="Name">    
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email_field" class="col-sm-5 col-form-label">Email <span class="text-danger">*</span></label>
                                    <div class="col-sm-7">
                                        <input type="email" class="form-control" id="email_field" placeholder="Email">    
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="message_field" class="col-sm-5 col-form-label">Message <span class="text-danger">*</span></label>
                                    <div class="col-sm-7">
                                        <textarea class="form-control" id="message_field" rows="5" placeholder="Message"></textarea>    
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="message_field" class="col-sm-5 col-form-label"></span></label>
                                    <div class="col-sm-7">
                                        <a class="btn btn-dark text-white">Submit</a>    
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </section>
    `;
}
const bodyAbout = () => {
    var bodyPortfolio = document.getElementById('body-content');
    bodyPortfolio.innerHTML = 
    `
    <section id="about">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="card-text">
                                <h4>About e-Store</h4>
                                <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, doloremque. Quasi fugit, ullam at facere quam nobis tenetur libero fuga molestiae. Iure reiciendis dicta eaque autem laborum at voluptas aut.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores molestias omnis at adipisci qui praesentium deserunt molestiae ipsa, cum sapiente quaerat ratione, sunt nulla veritatis reiciendis alias ad aspernatur ut?
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque aspernatur consequuntur, eum cumque autem est impedit blanditiis corporis, magnam, fugit voluptatum. Deserunt iure excepturi repellendus numquam molestias doloribus accusantium veniam?
                                
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat harum culpa corporis veritatis animi, ea vel earum! Illum eaque nisi ullam, est iste ipsam eveniet deleniti magnam. Similique, vero repudiandae?
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor in officia magni excepturi aperiam beatae eligendi quisquam? Enim, nihil! Consequatur, iure enim aliquid laboriosam asperiores sed maxime non possimus doloremque!
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quidem possimus rem quaerat, quae quia odio numquam pariatur aperiam quibusdam assumenda veritatis nemo consequuntur dolorum repudiandae omnis reprehenderit placeat veniam!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </section>
    `;
}
const bodyArticle = () => {
    var bodyPortfolio = document.getElementById('body-content');
    bodyPortfolio.innerHTML = 
    `
    <section id="article">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="card">
                        <img src="images/article/1.jpg" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div> 
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="card">
                        <img src="images/article/2.jpg" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div> 
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="card">
                        <img src="images/article/3.jpg" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div> 
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="card">
                        <img src="images/article/4.jpg" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>
    `;
}
const bodyMember = () => {
    var bodyPortfolio = document.getElementById('body-content');
    bodyPortfolio.innerHTML = 
    `
    <section id="member">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-body">
                            <img src="images/testimonial/1.jpg" class="rounded-circle">
                            <h5>Ansellma</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-body">
                            <img src="images/testimonial/2.jpg" class="rounded-circle">
                            <h5>John doe</h5>
                        </div>
                    </div>
                </div> 
                <div class="col-md-4 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-body">
                            <img src="images/testimonial/3.jpg" class="rounded-circle"> 
                            <h5>Alena</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-body">
                            <img src="images/testimonial/4.jpg" class="rounded-circle">
                            <h5>Egi Erdian</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-body">
                            <img src="images/testimonial/5.jpg" class="rounded-circle">
                            <h5>Hellen</h5>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-body">
                            <img src="images/testimonial/6.jpg" class="rounded-circle">
                            <h5>Robertina</h5>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
    `;
}
const bodyProduct = () => {
    var bodyPortfolio = document.getElementById('body-content');
    bodyPortfolio.innerHTML = 
    `
    <section id="product">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-6">
                    <div class="card">
                        <img src="images/product/1.jpg" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-text">
                            Product - 1 
                            </h5>
                            <p class="card-text">
                            Price $300 
                            </p>   
                        </div>
                    </div>
                </div> 
                <div class="col-md-3 col-sm-6 col-6">
                    <div class="card">
                        <img src="images/product/2.jpg" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-text">
                            Product - 2 
                            </h5>
                            <p class="card-text">
                            Price $600 
                            </p>   
                        </div>
                    </div>
                </div> 
                <div class="col-md-3 col-sm-6 col-6">
                    <div class="card">
                        <img src="images/product/3.jpg" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-text">
                            Product - 3 
                            </h5>
                            <p class="card-text">
                            Price $350 
                            </p>   
                        </div>
                    </div>
                </div> 
                <div class="col-md-3 col-sm-6 col-6">
                    <div class="card">
                        <img src="images/product/4.jpg" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-text">
                            Product - 4 
                            </h5>
                            <p class="card-text">
                            Price $5500 
                            </p>   
                        </div>
                    </div>
                </div> 
                <div class="col-md-3 col-sm-6 col-6">
                    <div class="card">
                        <img src="images/product/5.jpg" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-text">
                            Product - 5 
                            </h5>
                            <p class="card-text">
                            Price $200 
                            </p>   
                        </div>
                    </div>
                </div> 
                <div class="col-md-3 col-sm-6 col-6">
                    <div class="card">
                        <img src="images/product/6.jpg" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-text">
                            Product - 6 
                            </h5>
                            <p class="card-text">
                            Price $2100 
                            </p>   
                        </div>
                    </div>
                </div> 
                <div class="col-md-3 col-sm-6 col-6">
                    <div class="card">
                        <img src="images/product/7.jpg" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-text">
                            Product - 7 
                            </h5>
                            <p class="card-text">
                            Price $1200 
                            </p>   
                        </div>
                    </div>
                </div> 
                <div class="col-md-3 col-sm-6 col-6">
                    <div class="card">
                        <img src="images/product/8.jpg" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-text">
                            Product - 8 
                            </h5>
                            <p class="card-text">
                            Price $750 
                            </p>   
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>
    `;
}
const bodyTestimonial = () => {
    var bodyPortfolio = document.getElementById('body-content');
    bodyPortfolio.innerHTML = 
    `
    <section id="testimonial">
        <div class="container">
            <div class="custom-heading">
                <h4 class="display-4">What do people think about e-Stores?</h4>
                <p class="card-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, doloremque. Quasi fugit, ullam at facere quam nobis tenetur libero fuga molestiae. Iure reiciendis dicta eaque autem laborum at voluptas aut.
                                
                </p>
            </div>
            <div class="row">
                <div class="col-md-4 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-body">
                            <img src="images/testimonial/1.jpg" class="rounded-circle">
                            <h5>Ansellma</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-body">
                            <img src="images/testimonial/2.jpg" class="rounded-circle">
                            <h5>John doe</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div> 
                <div class="col-md-4 col-sm-12 col-12">
                    <div class="card">
                        <div class="card-body">
                            <img src="images/testimonial/3.jpg" class="rounded-circle"> 
                            <h5>Alena</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </section>
    `;
}