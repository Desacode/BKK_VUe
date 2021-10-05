<template>
  <Navbar />
  <div class="container">
    <h1 class="h2">BKK</h1>
  </div>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "BKK",
  components: {
    Navbar,
    Footer,
  },
};
</script>
