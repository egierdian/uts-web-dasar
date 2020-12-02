document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".nav-item").forEach(function(elm) {
        elm.addEventListener("click", function(event) {
            // Muat konten halaman yang dipanggil
            page = event.target.getAttribute("href").substr(1);
            loadPage(page);
        });
    });
    var page = window.location.hash.substr(1);
    if(page === "") page="home";
    loadPage(page);

    function loadPage(page) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4){
                // ambil element dengan id karena selector berdasarkan #
                var content = document.querySelector("#body-content");
                if(this.content == 200){
                    content.innerHTML = xhttp.responseText;
                } else if (this.status == 400) {
                    content.innerHTML = "<p>Tidak ditemukan</p>";
                } else {
                    content.innerHTML = `
                    <div id="notfound">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 col-12">
                                    <div class="card">
                                        <img src="../images/404.svg" class="card-img-top">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                }

                if(page == "home") {
                    bodyHome();
                } else if(page == "about") {
                    bodyAbout();
                } else if(page == "article"){
                    bodyArticle();
                } else if(page == "contact") {
                    bodyContact();
                } else if(page == "member"){
                    bodyMember();
                } else if(page == "product") {
                    bodyProduct();
                } else if(page == "testimonial"){
                    bodyTestimonial();
                }
            }
        };
        xhttp.open("GET", "pages/" + page + ".html", true);
        xhttp.send();
    }
})