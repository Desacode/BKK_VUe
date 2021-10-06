<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="image/brand.png" width="120" alt="" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link active" to="/">
            Home
          </router-link>
          <router-link class="nav-link" to="/informasi">
            Informasi
          </router-link>
          <router-link class="nav-link" to="/job">
            Lowongan pekerjaan
          </router-link>
          <router-link class="nav-link" to="/bkk">
            BKK
          </router-link>
          <router-link class="nav-link" to="/login">
            Login
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
