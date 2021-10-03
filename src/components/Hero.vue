<template>
  <div class="row jumbotron">
    <div class="col-12 col-lg-6 d-flex justify-content-center">
      <img src="image/banner.png" class="image-hero" alt="" />
    </div>
    <div class="col-12 col-lg-6 mt-lg-4 d-flex justify-content-lg-center">
      <div class="container-jmb-left">
        <h1 class="h2 text-jmb">Bursa Kerja Khusus SMK Mutu.</h1>
        <p class="text-desc-jmb mt-3">
          Konsultasi & Mencari Lowongan Pekerjaan Dengan Mudah Bersama BKK SMK
          Muhammadiyah 7 Gondanglegi - Malang.
        </p>
        <div class="row mt-5">
          <div class="col d-grid">
            <a href="#login" class="btn btn-purple">Login</a>
          </div>
          <div class="col d-grid">
            <button @click="Testimonial" class="btn btn-secondary">
              Testimonials
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  methods: {
    Testimonial() {
      let element = document.getElementById("Testimonial");
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
  //   mounted() {
  //     this.Testimonial();
  //   },
};
</script>
