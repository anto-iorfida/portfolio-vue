<script>
export default {
  name: "AppHeader",
  data() {
    return {
      // array con dati della nav
      menuItems: [
        { label: "Home", link: "#home" },
        { label: "About", link: "#about" },
        { label: "Skills", link: "#skills" },
        { label: "Work", link: "#work" },
        { label: "Contact", link: "#contact" },
      ],
      selectedItem: null,
      burgerMenuShow: false,
    };
  },
  methods: {
    // funzione che al clik compare la barra sotto li
    toggleMenuItem(index) {
      if (this.selectedItem === index) {
        // Deseleziona l'elemento se è già selezionato
        this.selectedItem = null;
      } else {
        // Seleziona l'elemento cliccato
        this.selectedItem = index;
      }
    },
    // funzione che determina la sezione che è attualmente visibile
    handleScroll() {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          this.selectedItem = i;
          break;
        }
      }
    },
    toggleMenuItem(index) {
      this.selectedItem = index;
    },
    // al click compare il menu
    getMenuNav() {
      // this.burgerMenuShow = !this.burgerMenuShow;
      let menu = document.querySelector('.nav__menu ul');
            if (menu.style.display === 'none' || menu.style.display === '') {
                menu.style.display = 'flex';
            } else {
                menu.style.display = 'none';
            }
    }
  },
  // avvia la funzione che si determina la sezione attuale
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<template>
  <header>
    <nav class="flex-mix between container h-100">
      <div>
        <a href="#" class="nav__logo">My Portfolio</a>
      </div>

      <div id="nav-menu" class="nav__menu">
        <ul class="flex-mix">
          <li v-for="(item, index) in menuItems" :key="index" @click="toggleMenuItem(index)"
            :class="{ selected: selectedItem === index, color: selectedItem === index }">
            <a  :href="item.link" class="nav__link">{{ item.label }}</a>
          </li>
        </ul>
      </div>
      <div class="burger-icon test">
        <label class="burger" for="burger">
          <input @click="getMenuNav()" class="line" type="checkbox" id="burger" />
        </label>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use '../style/_variables' as *;

header {
  height: 60px;
  min-width: 80%;
  padding: 0 20px;
  border-radius: 12px;
  // margin: 0 auto;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: #ffffff3a;
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);
  backdrop-filter: blur(8px) saturate(120%);

  nav {
    ul {
      gap: 40px;

      li {
        position: relative;

        &::after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: $primariColor;
          transition: width 0.4s ease-in-out, left 0.4s ease-in-out;
        }

      }

      .color {
        color: $primariColor;

        text-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
      }

      .selected::after {
        width: 100%;
        left: 0;
      }

    }
  }
}

.test {
  display: none;
}

@media screen and (min-width: 767px) {
  .nav__menu ul {
    display: flex !important;
  }
}

@media screen and (max-width: 767px) {
  .test {
    display: inline-block;
  }

  .nav__menu ul {
    display: flex;
    position: absolute;
    flex-direction: column;
    background: #ffffff9a;
    border-radius: 20px;
    display: none;
    // box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);
    backdrop-filter: blur(20px);
    top: 90px;
    width: 70vw;
    height: 70vh;
    left: 50%;
    transform: translateX(-50%);
  }


}
</style>
