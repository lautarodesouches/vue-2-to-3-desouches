<template>
  <main class='main'>
    <div class='div' v-if='this.$store.getters.getLoading'>
      <h2 class='loading'>Cargando...</h2>
    </div>
    <div class='div' v-if='!this.$store.getters.getLoading'>
      <router-view />
    </div>
  </main>
</template>
<!----------------------------------------------------------------------------------------------------------------->
<script>
// --------------------------
export default {
  name: 'App',
  created(){
    this.$store.dispatch('fetchData')
  }
}
</script>
<!----------------------------------------------------------------------------------------------------------------->
<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.div{
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.main {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom right, #3739b8, rgb(134, 151, 227));
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
}

.button {
  margin: 2rem auto 0 auto;
  font-size: 1rem;
  background: #ff5100;
  color: #fff;
  padding: 5px 25px;
  border-radius: 5px;
  border: 1px solid #e74d06;
  transition: all 1s;
  cursor: pointer;
}

.loading {
  background: #fff;
  border-radius: 5px;
  padding: .5rem 1.5rem;
}
</style>