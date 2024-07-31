<script>
import Animation from './Animation.js';

export default {
  name: "About",
  mixins: [Animation],
  data() {
    return {};
  },

};
</script>

<template>
  <section id="about">
    <div class="container">
      <h2>About</h2>
      <div class="d-flex around align-center responsive">
        <div class="w-50 img-profile">
          <img src="https://cdn.vectorstock.com/i/1000v/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg"
            alt="" />
        </div>
        <div class="w-50 my-description">
          <h2>Chi è Antonio?</h2>
          <p>
            Questo ragazzo, fin dalla giovane età, è stato appassionato di
            informatica. Ha sviluppato una fervida curiosità per il mondo
            digitale e ha dedicato tempo ed energia a esplorare e comprendere i
            meccanismi che stanno dietro ai computer, ai software e alle reti.
            La sua passione per l'informatica è contagiosa e si riflette nel suo
            impegno costante nel mettere il 100% in tutto ciò che fa. Ciò che
            distingue questo ragazzo è la sua capacità di adattarsi alle
            situazioni. Affronta le sfide con flessibilità e creatività,
            trovando soluzioni innovative anche nei momenti più complessi.
          </p>
          <p>
            Non si lascia scoraggiare dagli ostacoli, ma li affronta con
            determinazione e perseveranza. Una delle sue qualità più ammirabili
            è la sua sete di conoscenza. Quando si imbatte in qualcosa che non
            conosce, invece di arrendersi, si impegna al massimo per
            apprenderlo. Studia, ricerca, sperimenta, e non si ferma finché non
            ha acquisito la comprensione desiderata. La sua determinazione e il
            suo impegno lo spingono costantemente a migliorarsi e a superare i
            propri limiti.
          </p>
          <p>
            Sa lavorare efficacemente in gruppo, contribuendo con le sue
            competenze e il suo entusiasmo alla realizzazione degli obiettivi
            comuni. È empatico e riesce a collaborare con persone provenienti da
            diverse sfere della vita, sfruttando al meglio le loro diverse
            prospettive e competenze.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  // background: radial-gradient(ellipse at bottom, #1B2735 0%, #12141d 100%);
  background-image: url(../assets/img/img-background/webapplication.jpg);
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;

  
  .img-profile {
    height: 20%;
    width: 20%;

  }
}

.my-description {
  h2{
    color: white;
  }
  p {
    color: white;
    margin: 10px 0;
    // border:2px solid black;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);
    backdrop-filter: blur(20px) saturate(120%);
  }

  p:nth-child(2) {
    transform: translateX(-20px);


  }

  p:nth-child(3) {
    transform: translateX(40px);
  }

  p:nth-child(4) {
    transform: translateX(-20px);
  }
}

// -------effetti entrata in sezione--------------
.section-entered .img-profile {
  animation: slideInUp 2s ease-out forwards;
}

.section-entered .my-description p:nth-child(2) {
  animation: slideInLeft 2s ease-out forwards;
}

.section-entered .my-description p:nth-child(3) {
  animation: slideInRight 2s ease-out forwards;
}

.section-entered .my-description p:nth-child(4) {
  animation: slideInUp 2s ease-out forwards;
}

@keyframes slideInLeft {
  0% {
    transform: translateX(-30%);
    opacity: 0;
  }

  100% {
    transform: translateX(auto);
    opacity: 1;
  }
}

@keyframes slideInRight {
  0% {
    transform: translateX(40%);
    opacity: 0;
  }

  100% {
    transform: translateX(auto);
    opacity: 1;
  }
}

@keyframes slideInUp {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }

  100% {
    transform: translateY(auto);
    opacity: 1;
  }
}

// -------effetti entrata in sezione--------------</style>