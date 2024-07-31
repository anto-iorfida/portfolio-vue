<script>
export default {
  name: "AppFooter",
  data() {
    return {};
  },
};
</script>

<template>
  <footer>
    <section>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div class="container">
        <div class="d-flex">
          <div class="w-50">
            <p>My Contact</p>
            <p>antonioiorifda99@gmail.com</p>
          </div>
          <div class="w-50">
            <ul class="flex-mix gap-10 icons-home">
          <li>
            <a href="https://www.linkedin.com/in/antonino-iorfida-4723a72ba" target="_blank"
              rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a><span>LinkedIn</span>
          </li>
          <li>
            <a href="#"><i class="fab fa-github"></i></a><span>GitHub</span>
          </li>
          <li>
            <a href="https://www.instagram.com/antoo_iorfida/" target="_blank"
            rel="noopener noreferrer"><i class="fab fa-instagram"></i></a><span>Instagram</span>
          </li>
        </ul>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
section{
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #12141d 100%);
  overflow: hidden;
  color: white;
}
</style>