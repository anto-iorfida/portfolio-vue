<script>
export default {
  name: "Work",
  data() {
    return {};
  },
};
</script>

<template>
  <section id="work">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div class="container">
      <h2>Work</h2>
      <div class="flex-mix">
        <a href=""><img src="../assets/img/img-background/gitinwork.gif" alt=""></a>

      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #12141d 100%);
  overflow: hidden;

  a {
    z-index: 4;
  }
}
</style>