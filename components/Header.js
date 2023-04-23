function Header() {
    return (
        <section class="">
        <nav class="navbar navbar-expand-lg bg-black">
            <div class="container-fluid">
              <a class="navbar-brand text-white" href="#">ExpressX</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="/alumina">Alumni Talk</a>
                  </li>
                  <li class="nav-item">
                    <a href='/resume' class="nav-link text-white" >Resume Builder</a>
                  </li>
                  
                  <li class="nav-item">
                    <a class="nav-link active text-white" aria-current="page" href="/skilltest">Career Builder</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-white" href="#">Contact Us</a>
                  </li>
                  </ul>
              </div>
            </div>
          </nav>
    </section>

    )
}

export default Header