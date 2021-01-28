<template>
  <Layout>

    <h1>Gambit Challenge #2</h1>
    <h5>Made with:</h5>
    <ul>
      <li>Vue.js</li>
      <li>Gridsome</li>
      <li>SCSS</li>
    </ul>

    <h6>Here's the data!</h6>

    <div class="table">
      <div class="table-categories">
        <p>ID</p>
        <p>Register</p>
        <p>Numbers</p>
        <p>Variable Name</p>
        <p>Format</p>
        <p>Note</p>
      </div>
      
      <div class="row" v-for="edge in $page.registers.edges" :key="edge.node.id">
        <div class="col">    
          <p><span>ID: </span>{{ edge.node.id }}</p>
        </div>
        <div class="col">            
          <p><span>Register: </span>{{ edge.node.register }}</p>
        </div>
        <div class="col">            
          <p><span>Numbers: </span>{{ edge.node.numbers }}</p>
        </div>
        <div class="col">            
          <p><span>Variable Name: </span>{{ edge.node.var_name }}</p>
        </div>
        <div class="col">            
          <p><span>Format: </span>{{ edge.node.format }}</p>
        </div>
        <div class="col">            
          <p><span>Note: </span>{{ edge.node.note }}</p>
        </div>
      </div>
    </div>
    <Pager :info="$page.registers.pageInfo"/>
  </Layout>
</template>

<page-query>
query Registers ($page: Int) {
  registers: allRegisters(perPage: 5, page: $page, sortBy: "id", order: ASC) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        register
        numbers
        var_name
        format
        note
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome';

export default {
  metaInfo: {
    title: 'Gambit Challenge'
  },
  components: {
    dataTable,
    Pager
  }
}
</script>