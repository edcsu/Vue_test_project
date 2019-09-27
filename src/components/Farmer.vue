<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <input id="farmer-name" v-model="farmer.name"> <br>
      <button id="save-btn" @click="splitFarmername(farmer.name)">Save Farmer </button>
    </div>
    <div 
        class="error"
      >
      {{ errorText }}
    </div>
    <div >
        <ul>
            <li>
                Full name is: {{ farmer.name }}
            </li>
            <li>
                First name is: {{ farmer.Firstname }}
            </li>
            <li>
                Last name is: {{ farmer.Lastname }}
            </li>
            <li>
                Other name is: {{ farmer.Othername }}
            </li>
        </ul>
    </div>
    <div>
        farmer Object: {{ farmer }}
    </div>
      
  </div>
  
</template>

<script>
  import sharedMethodsMixin from '@/mixins/sharedMethodsMixin'
  export default {
    name: "HelloWorld",
    mixins: [sharedMethodsMixin],
    props: {
      msg: String
    },
    data () {
      return {
        showHello: false
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#save-btn {
    margin: 1rem 0;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  // display: inline-block;
  margin: 1rem 0;
}
a {
  color: #42b983;
}

.error {
  color: red;
  margin: 1rem 0;
}


</style>
