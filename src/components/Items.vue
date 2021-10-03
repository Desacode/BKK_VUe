<template>
  <section class="popular-job container">
    <Title :title="title" :desc="desc" />
    <div class="content-job mt-3">
      <div id="card-job-popular" class="row">
        <div class="col-lg-3 col-sm-6 col-6 mb-4">
          <a href="#lowongan_pekerjaan/details">
            <div class="card card-body card-hover">
              <img src="image/login-img.png" class="img-company" />
              <p class="company-title">PT. Gayatri Lintas Nusantara</p>
              <hr class="driver" />
              <div class="text-card mt-2">
                <p class="text-job">Posisi : Networker</p>
                <p class="text-job">Tulungagung - Jawa Timur</p>
                <p class="text-date">
                  Pendaftaran Ditutup : 12 Oktober 2022
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-3 col-sm-6 col-6 mb-4">
          <a href="#lowongan_pekerjaan/details">
            <div class="card card-body card-hover">
              <img src="image/login-img.png" class="img-company" />
              <p class="company-title">PT. Gayatri Lintas Nusantara</p>
              <hr class="driver" />
              <div class="text-card mt-2">
                <p class="text-job">Posisi : Networker</p>
                <p class="text-job">Tulungagung - Jawa Timur</p>
                <p class="text-date">
                  Pendaftaran Ditutup : 12 Oktober 2022
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-3 col-sm-6 col-6 mb-4">
          <a href="#lowongan_pekerjaan/details">
            <div class="card card-body card-hover">
              <img src="image/login-img.png" class="img-company" />
              <p class="company-title">PT. Gayatri Lintas Nusantara</p>
              <hr class="driver" />
              <div class="text-card mt-2">
                <p class="text-job">Posisi : Networker</p>
                <p class="text-job">Tulungagung - Jawa Timur</p>
                <p class="text-date">
                  Pendaftaran Ditutup : 12 Oktober 2022
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-3 col-sm-6 col-6 mb-4">
          <a href="#lowongan_pekerjaan/details">
            <div class="card card-body card-hover">
              <img src="image/login-img.png" class="img-company" />
              <p class="company-title">PT. Gayatri Lintas Nusantara</p>
              <hr class="driver" />
              <div class="text-card mt-2">
                <p class="text-job">Posisi : Networker</p>
                <p class="text-job">Tulungagung - Jawa Timur</p>
                <p class="text-date">
                  Pendaftaran Ditutup : 12 Oktober 2022
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "./partials/TitleSection.vue";
export default {
  name: "Items",
  components: {
    Title,
  },
  props: {
    title: String,
    desc: String,
  },
};
</script>
