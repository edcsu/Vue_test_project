<template>
  <div class="about">
    <h1>This shows the names of the farmer</h1>
    <Farmer />
  </div>
</template>

<script>
// @ is an alias to /src
import Farmer from "@/components/Farmer.vue";

export default {
  name: "about",
  components: {
    Farmer
  }
};
</script>