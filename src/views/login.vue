<template>
  <Navbar />
  <div class="container">
    <div class="row login-form">
      <div class="col-0 d-lg-none col-lg-6 d-flex justify-content-center">
        <img src="image/login-img.png" class="image-login" alt="" />
        <div class="image-login-wraper"></div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="card">
          <div class="card-body">
            <div class="title-section">
              <h3 class="title-content">Login</h3>
              <p class="title-desc">Selamat Datang Kembali.</p>
            </div>
            <form class="mt-5">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Email address</label
                >
                <input
                  placeholder="Enter your email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                  placeholder="Enter your Password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <a href="#" class="link-secondary mt-2">Forgot Password?</a>
              <div class="btn-center-body">
                <button type="submit" class="btn btn-purple mt-2 ps-5 pe-5">
                  Login
                </button>

                <a href="#registrasi_siswa" class="link-secondary mt-2"
                  >Registrasi Siswa</a
                >
                <a href="#" class="link-secondary mt-2"
                  >Registrasi Perusahaan</a
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Information",
  components: {
    Navbar,
    Footer,
  },
};
</script>
