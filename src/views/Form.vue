<template>
  <div>
  <form class="form" id='form' @submit.prevent='validateForm()'>
    <h2 class="form__title">Formulario</h2>
    <div class="form__group">
      <label class="form__label" for="user">Usuario:</label>
      <input class="form__input" type="text" id="user" placeholder="Usuario" v-model='user.value' required>
      <span class='form__error' v-if='user.error'>* {{user.error}}</span>
    </div>
    <div class="form__group">
      <label class="form__label" for="course">Curso:</label>
      <div class='form__options'>
        <div>
          <input type="radio" id="react" name="course" value="react" v-model='course.value'>
          <label class='form__help' for="react">React</label><br>
        </div>
        <div>
          <input type="radio" id="vue" name="course" value="vue" v-model='course.value'>
          <label class='form__help' for="vue">Vue</label><br>
        </div>
        <div>
          <input type="radio" id="angular" name="course" value="angular" v-model='course.value'>
          <label class='form__help' for="angular">Angular</label>
        </div>
      </div>
      <span class='form__error' v-if='course.error'>* {{course.error}}</span>
    </div>
    <div class="form__group">
      <label class="form__label" for="color">Colores:</label>
      <div class='form__options'>
        <div>
          <input type="checkbox" id="red" name="color" value="Rojo" v-model='colors.value'>
          <label class='form__help' for="red">Rojo</label>
        </div>
        <div>
          <input type="checkbox" id="green" name="color" value="Verde" v-model='colors.value'>
          <label class='form__help' for="green">Verde</label>
        </div>
        <div>
          <input type="checkbox" id="blue" name="color" value="Azul" v-model='colors.value'>
          <label class='form__help' for="blue">Azul</label>
        </div>
      </div>
      <span class='form__error' v-if='colors.error'>* {{colors.error}}</span>
    </div>
    <div class="form__group">
      <label class="form__label" for="bot">3 + 4 =</label>
      <input class="form__input" type="number" id="bot" v-model='bot.result' required>
      <span class='form__error' v-if='bot.error'>* {{bot.error}}</span>
    </div>
    <div class='form__buttonContainer'>
      <button class='form__button'>Enviar</button>
    </div>
  </form>
  <div>
    <router-link to='/data'>
      <button class='button'>Ver datos</button>
    </router-link>
  </div>
</div>
</template>
<!----------------------------------------------------------------------------------------------------------------->
<script>
export default {
  name: 'MainForm',
  data() {
    return {
      user: { value: '', error: '' },
      course: { value: '', error: '' },
      colors: { value: [], error: '' },
      bot: { result: null, value: true, error: '' }
    }
  },
  methods: {
    resetForm() {
      this.user.value = ''
      this.course.value = ''
      this.colors.value = []
      this.bot.value = null
    },
    cleanErrors() {
      this.user.error = ''
      this.course.error = ''
      this.colors.error = ''
      this.bot.error = ''
    },
    validateForm() {

      this.$store.dispatch('validatingForm')

      this.cleanErrors()

      let required = 'No puede estar vacio'

      if (this.user.value === '') {
        this.user.error = required
        return
      }

      if (this.user.value === 'a') {
        this.user.error = 'No puede ser "a"'
        return
      }

      if (this.course.value === '') {
        this.course.error = required
        return
      }

      if (this.colors.value.length === 0) {
        this.colors.error = required
        return
      }

      this.bot.value = this.bot.result !== 7

      if (this.bot.value) {
        this.bot.error = 'Respuesta incorrecta!'
      }

      let form = {
        user: this.user.value,
        course: this.course.value,
        colors: this.colors.value,
        bot: this.bot.value
      }

      this.$store.dispatch('addData', form)

      this.resetForm()
    }
  }
}
</script>
<!----------------------------------------------------------------------------------------------------------------->
<style scoped>
.form {
  background: #fff;
  border: 1px solid #a1a1a1;
  padding: 10px;
  border-radius: 5px;
  width: 250px;
}

.form__title {
  width: 100%;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 400;
}

.form__group {
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}

.form__options {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.form__label {
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: .5rem;
}

.form__input {
  font-size: .8rem;
  font-weight: 300;
  border: 1px solid #707070;
  border-radius: 5px;
  padding: 5px;
}

.form__help {
  font-size: 1rem;
}

.form__buttonContainer {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}

.form__button {
  width: 50%;
  margin: 1rem auto 0 auto;
  font-size: 1rem;
  background: #3739b8;
  color: #fff;
  padding: 5px 25px;
  border-radius: 5px;
  border: 1px solid #2a2ca8;
  transition: all 1s;
  cursor: pointer;
}

.form__button:hover {
  transform: scale(1.05);
}

.form__error {
  font-size: .8rem;
  color: #dc143c;
  margin-top: .8rem;
}
</style>