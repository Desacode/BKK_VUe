<template>
  <section id="Testimonial" class="testimonial container">
    <Title :title="title" :desc="desc" />
    <div class="content-testi mt-3">
      <div id="testimonial" class="row">
        <div class="col-lg-3 animate-hide col-sm-6 col-6 mb-4">
          <div class="card card-body">
            <img src="image/cisco.png" class="img-pict-testi" />
            <div class="text-card mt-2">
              <p class="username">Amanu Nur A</p>
              <p class="pekerjaan">Fullstack Developers</p>
              <p class="testi">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                ipsum animi quod incidunt. Aliquam, adipisci? Eligendi modi id
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 animate-hide col-sm-6 col-6 mb-4">
          <div class="card card-body">
            <img src="image/cisco.png" class="img-pict-testi" />
            <div class="text-card mt-2">
              <p class="username">Amanu Nur A</p>
              <p class="pekerjaan">Fullstack Developers</p>
              <p class="testi">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                ipsum animi quod incidunt. Aliquam, adipisci? Eligendi modi id
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 animate-hide col-sm-6 col-6 mb-4">
          <div class="card card-body">
            <img src="image/cisco.png" class="img-pict-testi" />
            <div class="text-card mt-2">
              <p class="username">Amanu Nur A</p>
              <p class="pekerjaan">Fullstack Developers</p>
              <p class="testi">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                ipsum animi quod incidunt. Aliquam, adipisci? Eligendi modi id
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 animate-hide col-sm-6 col-6 mb-4">
          <div class="card card-body">
            <img src="image/cisco.png" class="img-pict-testi" />
            <div class="text-card mt-2">
              <p class="username">Amanu Nur A</p>
              <p class="pekerjaan">Fullstack Developers</p>
              <p class="testi">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                ipsum animi quod incidunt. Aliquam, adipisci? Eligendi modi id
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "./partials/TitleSection.vue";

export default {
  name: "Testimonial",
  components: {
    Title,
  },
  props: {
    title: String,
    desc: String,
  },
};
</script>
