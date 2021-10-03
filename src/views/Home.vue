<template>
  <Navbar />
  <Hero />
  <Ads />
  <div class="bg-secondary container-content">
    <Items
      title="Popular Job Vacancies"
      desc="Lowongan Pekerjaan Yang Sering Dicari."
    />
    <Testimonial
      title="Testimonials"
      desc="Ayo Kita Lihat Kisah Sukses Mereka"
    />
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Hero from "@/components/Hero.vue";
import Ads from "@/components/Ads.vue";
import Items from "@/components/Items.vue";
import Testimonial from "@/components/Testimonial.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Ads,
    Items,
    Testimonial,
    Footer,
  },
};
</script>
