<template>
  <div class="table">
      <div class="table-categories">
        <p>ID</p>
        <p>Register</p>
        <p>Numbers</p>
        <p>Variable Name</p>
        <p>Format</p>
        <p>Note</p>
      </div>
      <div class="row" v-for="edge in $static.registers.edges" :key="edge.node.id">
        
        <div class="col">            
          <p>{{ edge.node.id }}</p>
        </div>
        <div class="col">            
          <p>{{ edge.node.register }}</p>
        </div>
        <div class="col">            
          <p>{{ edge.node.numbers }}</p>
        </div>
        <div class="col">            
          <p>{{ edge.node.var_name }}</p>
        </div>
        <div class="col">            
          <p>{{ edge.node.format }}</p>
        </div>
        <div class="col">            
          <p>{{ edge.node.note }}</p>
        </div>
      </div>
  </div>
</template>

<static-query>
query {
  registers: allRegisters(sortBy: "id", order: ASC) {
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
</static-query> 

<script>
export default {

}
</script>