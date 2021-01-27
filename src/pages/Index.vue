<template>
  <Layout>

    <h1>Gambit Challenge #2</h1>
    <h5>Made by: Samuel Granvik</h5>
    <h5>Made with:</h5>
    <ul>
      <li>Vue.js</li>
      <li>Gridsome</li>
      <li>SCSS</li>
    </ul>

    <h6>Here's the data!</h6>

    <dataTable />

  </Layout>
</template>

<script>
import dataTable from '~/components/dataTable.vue'

export default {
  metaInfo: {
    title: 'Gambit Challenge'
  },
  components: {
    dataTable
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
