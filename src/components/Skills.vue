<script>
export default {
  name: "Skills",
  data() {
    return {
      slides: [
        {
          id: 1,
          content: 'Sicurezza web e best practices',
        },
        {
          id: 2,
          content: 'Testing e debugging',
        },
        {
          id: 3,
          content: 'Conoscenza di SQL e database',
        },
        {
          id: 4,
          content: 'Scrittura di codice pulito e manutenibile',
        },
        {
          id: 5,
          content: 'Gestione delle prestazioni web',
        },
        {
          id: 6,
          content: 'Elaborazione dati dinamica ',
        },
        {
          id: 7,
          content: 'Accessibilità e UX/UI design',
        },
        {
          id: 8,
          content: 'Conoscenza di HTTP e API',
        }
      ],
      slideHeight: 100, // Altezza di ogni slide in pixel
      trackHeight: '' // Altezza totale della traccia
    };
  },
  computed: {
    slidesWithDuplicates() {
      // Duplica le slide all'inizio e alla fine
      return [...this.slides, ...this.slides, ...this.slides];
    }
  },
  mounted() {
    // Calcola l'altezza totale della traccia
    this.trackHeight = `${this.slideHeight * this.slidesWithDuplicates.length}px`;
  }
};
</script>

<template>
  <section id="skills">
    <div class="container">
      <h2>Skills</h2>
      <div class="d-flex responsive">
        <div class="w-50">
          <h2>Proffesional Skills</h2>
        <br/>
          <p>
            Ho sviluppato le mie competenze attraverso desiderio di apprendimento e passione,la mia curiosità mi
            ha spinto a esplorare diversi ambiti e a perfezionare continuamente le mie
            capacità. Inoltre, ho partecipato al corso intensivo di Boolean, che mi ha fornito una solida base
            teorica e pratica. Questo percorso formativo mi ha permesso di acquisire competenze avanzate in vari
            settori, confrontarmi con altre persone ,migliorando la mia capacità di risolvere problemi complessi e di affrontare
            nuove sfide con sicurezza.
            <br>
            Sono sempre disposto a mettermi in gioco per imparare nuovi linguaggi e tecnologie, adattandomi rapidamente
            alle esigenze del progetto. La mia determinazione e volontà di crescere sono le mie forze motrici, che mi
            spingono a dare il massimo in ogni situazione.
          </p>
          <!-- carosello -->
          <div class="slider">
            <div class="slide-track">
              <!-- Duplica le slide all'inizio e alla fine -->
              <div class="slide flex-mix" v-for="(slide, index) in slidesWithDuplicates" :key="index">
                <p>{{ slide.content }}</p>
              </div>
            </div>
          </div>
          <!-- /carosello -->
        </div>
        <div class="container-icon w-50">
          <!-- ......IMMAGINI ICONE............. -->
          <div class="image">
            <img src="../assets/img/icons/html.png" alt="">
          </div>
          <div class="image">
            <img src="../assets/img/icons/css.png" alt="">
          </div>
          <div class="image">
            <img src="../assets/img/icons/sass.png" alt="">
          </div>
          <div class="image">
            <img src="../assets/img/icons/boostrap.png" alt="">
          </div>
          <div class="image">
            <img src="../assets/img/icons/js.png" alt="">
          </div>
          <div class="image">
            <img src="../assets/img/icons/vue.png" alt="">
          </div>
          <div class="image">
            <img src="../assets/img/icons/php.png" alt="">
          </div>
          <div class="image">
            <img src="../assets/img/icons/mysql.png" alt="">
          </div>
          <div class="image">
            <img src="../assets/img/icons/laravel.png" alt="">
          </div>
          <div class="image">
            <img src="../assets/img/icons/node.png" alt="">
          </div>
          <div class="image">
            <img src="../assets/img/icons/vite.png" alt="">
          </div>
          <div class="image">
            <img src="../assets/img/icons/git.png" alt="">
          </div>
          <!-- ......../IMMAGINI ICONE........... -->
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section{
  background-image: url(../assets/img/img-background/skills.png);
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}
.container-icon {
  display: flex;
  flex-wrap: wrap;

  .image {
    // flex-grow: 1;
    // flex-basis: 200;
    flex: 1 0 33.33%;

    img {
      margin: 20px auto;
    }
  }
}

// -------------CAROSELLO INFINITO
.slider {
  width: 100%;
  height: 320px;
  margin: auto;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0px 40px;
  transform-style: preserve-3d;
}

.slide-track {
  display: flex;
  // flex-direction: column;
  /* Cambia la direzione del layout in verticale */
  /* Modifica l'animazione per farlo scorrere per un intervallo più lungo */
  animation: scroll 30s linear infinite;
  height: auto;
  /* Impostato tramite JS */
  flex-wrap: wrap;
}

.slide {
  height: 100px;
  width: calc(100% / 2 - 30px);
  // border: 1px solid black;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  text-align: center;
  border-radius: 10px;
  margin: 14px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

}

@keyframes scroll {
  0% {
    transform: translateY(0);
    /* Lo slider inizia dalla posizione iniziale */
  }

  100% {
    transform: translateY(calc(-150px * 8));
    /* Lo slider si sposta fino all'inizio dopo che tutti gli elementi sono stati visualizzati */
  }
}
// -------effetti entrata in sezione--------------
.section-entered h2,
.section-entered p{
  animation: slideInUp 2s ease-out forwards;
}

.section-entered .container-icon {
  animation: slideInRight 2s ease-out forwards;
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

</style>