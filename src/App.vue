<script>
import AppHeader from './components/AppHeader.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Work from './components/Work.vue';
import Contact from './components/Contact.vue';
import AppFooter from './components/AppFooter.vue';


export default {
  components: {
    AppHeader,
    Home,
    About,
    Skills,
    Work,
    Contact,
    AppFooter
    
  }
}


</script>

<template>
<AppHeader></AppHeader>

<main>
  <Home></Home>
  <About></About>
  <Skills></Skills>
  <Work></Work>
  <Contact></Contact>
</main>

<AppFooter></AppFooter>
</template>

<style lang='scss'>
@use './style/generic';
@use './style/responsive';

</style>
