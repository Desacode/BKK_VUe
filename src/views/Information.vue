<template>
  <Navbar />
  <div class="container mt-5">
    <div class="title-section">
      <h3 class="title-content">Informasi</h3>
      <p class="title-desc">
        Cari Beberapa Informasi Yang Terkait Dengan Apa Yang Kamu Cari.
      </p>
    </div>
    <section class="informasi-body">
      <div class="row mt-5">
        <div class="col-12 col-lg-8" id="informasi-content">
          <!-- Content Mapping -->
        </div>
        <div class="col-0 d-lg-none col-lg-4">
          <p class="title-link">Katalog</p>
          <ul class="list-group list-group-flush mt-2">
            <li class="list-item">
              <a href="#">Lowongan Pekerjaan</a>
            </li>
            <li class="list-item">
              <a href="#">Luar Negeri</a>
            </li>
            <li class="list-item">
              <a href="#">Dalam Negeri</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div class="btn-center-body mt-4 justify-content-center d-flex">
      <a href="#" class="btn btn-purple ps-5 pe-5">Load More</a>
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
