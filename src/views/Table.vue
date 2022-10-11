<template>
  <div>
    <table class='table' v-if='this.$store.getters.getData.length > 0'>
      <tr class='table__tr'>
        <th class='table__th'>Usuario</th>
        <th class='table__th'>Curso</th>
        <th class='table__th'>Colores</th>
        <th class='table__th'>Bot</th>
      </tr>
      <tr v-for='item in this.$store.getters.getData' :key='item.id' class='table__tr'>
        <td class='table__th'>{{item.user}}</td>
        <td class='table__th'>{{item.course}}</td>
        <td class='table__th'>
          <span v-for='(color, key ) of item.colors' :key='key'>
            <span>{{color}}</span>
            <span v-if='item.colors.length > 1 && key !== item.colors.length - 1'>, </span>
          </span>
        </td>
        <td class='table__th' v-if='item.bot'>Si</td>
        <td class='table__th' v-else>No</td>
      </tr>
    </table>
    <div class='empty' v-if='this.$store.getters.getData.length < 1'>
      <h3>No hay datos, intenta agregar alguno llendo al formulario</h3>
    </div>
    <div>
      <router-link to='/'>
        <button class='button'>Ir al formulario</button>
      </router-link>
    </div>
  </div>
</template>
<!----------------------------------------------------------------------------------------------------------------->
<script>
export default {
  name: 'MainTable'
}
</script>
<!----------------------------------------------------------------------------------------------------------------->
<style scoped>
.table {
  margin: 0;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #d1d1d1;
  width: 700px;
}

.table__tr {
  margin: 0;
  padding: 0;
}

.table__th {
  width: 25%;
  padding: 3px;
  margin: 0;
  border: 1px solid #d1d1d1;
}

.empty {
  background: #fff;
  padding: .3rem 1rem;
  border-radius: 5px;
}
</style>