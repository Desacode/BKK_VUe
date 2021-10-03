<template>
  <div class="title-section">
    <h3 class="title-content">{{ title }}</h3>
    <p class="title-desc">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: "TitleSection",
  props: {
    title: String,
    desc: String,
  },
};
</script>
