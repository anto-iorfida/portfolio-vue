<script>
export default {
  name: "Contact",
  data() {
    return {};
  },
};
</script>

<template>
  <section id="contact">
    <div class="container">
      <h2>Contact</h2>
      <div class="form-card1">
        <div class="form-card2">
          <form class="form">
            <p class="form-heading">title</p>

            <div class="form-field">
              <input required="" placeholder="Name" class="input-field" type="text" />
            </div>

            <div class="form-field">
              <input required="" placeholder="Email" class="input-field" type="email" />
            </div>

            <div class="form-field">
              <input required="" placeholder="Subject" class="input-field" type="text" />
            </div>

            <div class="form-field">
              <textarea required="" placeholder="Message" cols="30" rows="3" class="input-field"></textarea>
            </div>

            <button class="sendMessage-btn">Send Message</button>
          </form>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../style/variables' as *;

section{
  background-image: url(../assets/img/img-background/bgcontact.gif);
  // background-repeat: no-repeat;
  background-size: contain;

.form-card1 {
  background-image: linear-gradient(163deg, $primariColor 0%, $primariColor 100%);
  border-radius: 22px;
  transition: all 0.3s;
  width: 60%;
  margin: 0 auto;

  .form-card2 {
    border-radius: 0;
    transition: all 0.2s;

    .form {
      display: flex;
      flex-direction: column;
      align-self: center;
      font-family: inherit;
      gap: 10px;
      padding-inline: 2em;
      padding-bottom: 0.4em;
      background-color: #171717;
      //background-color: #0a192f;
      border-radius: 20px;

      .form-heading {
        text-align: center;
        margin: 2em;
        color: $primariColor;
        font-size: 1.2em;
        background-color: transparent;
        align-self: center;
      }

      .form-field {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        border-radius: 10px;
        padding: 0.6em;
        border: none;
        outline: none;
        color: white;
        background-color: #171717;
        box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
      }

      .input-field {
        background: none;
        border: none;
        outline: none;
        width: 100%;
        color: #ccd6f6;
        padding-inline: 1em;
      }

      .sendMessage-btn {
        cursor: pointer;
        margin-bottom: 3em;
        padding: 1em;
        border-radius: 10px;
        border: none;
        outline: none;
        background-color: transparent;
        color: $primariColor;
        font-weight: bold;
        outline: 1px solid $primariColor;
        transition: all ease-in-out 0.3s;
      }

    }

  }
}

.sendMessage-btn:hover {
  transition: all ease-in-out 0.3s;
  background-color: $primariColor;
  cursor: pointer;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
}

.form-card1:hover {
  box-shadow: 0px 0px 30px 1px rgba(100, 255, 218, 0.3);
}

.form-card2:hover {
  transform: scale(0.98);
  border-radius: 20px;
}

}
</style>