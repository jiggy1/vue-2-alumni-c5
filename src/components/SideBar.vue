<template>
    <select>
      <option :key="index" v-for="(cohorte, index) in cohortes" :value="cohorte"></option>
    </select>
  </template>
  
  <script>
    export default {
      name: 'SideBar',
      data() {
        return {
          cohortes: [ 'cohorte-1', 'cohorte-2', 'cohorte-3', 'cohorte-4' ]
        }
      }
    }
  </script>