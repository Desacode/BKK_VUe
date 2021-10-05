<template>
  <Navbar />
  <div class="container">
    <div class="container mt-5">
      <!-- Title -->
      <div class="title-section">
        <h3 class="title-content">Lowongan Pekerjaan</h3>
        <p class="title-desc">
          Cari Lowongan Pekerjaan Yang Sesuai Dengan Minat Kamu.
        </p>
      </div>

      <!-- Search Bar -->
      <div class="row mt-3">
        <div class="col-12 col-md-6">
          <input
            placeholder="Cari Pekerjaan Yuk..."
            type="text"
            class="form-control"
            id="no-phone"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="col-10 col-md-5 mt-md-0 mt-2">
          <select
            style="text-align: center"
            class="form-control"
            name="categoryId"
            id="category"
          >
            <option value="#">--- Pilih Kategori ---</option>
            <option value="#">Networking</option>
            <option value="#">Alat Berat</option>
            <option value="#">Editing</option>
            <option value="#">Perkantoran</option>
          </select>
        </div>
        <div class="col-2 col-md-1 d-grid mt-md-0 mt-2">
          <button type="submit" class="btn btn-purple rounded-pill">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>

      <!-- Content -->
      <div class="content-job mt-5">
        <div id="card-job" class="row">
          <!-- Content Maping -->
        </div>
      </div>
      <!-- Load More -->
      <div class="btn-center-body mt-4 justify-content-center d-flex">
        <a href="#" class="btn btn-purple ps-5 pe-5">Load More</a>
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
  name: "Job",
  components: {
    Navbar,
    Footer,
  },
};
</script>
