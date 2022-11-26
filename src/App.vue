<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  components: {
    AppHeader,
    AppFooter
  },
}
</script>
  
<template>
  <div id="app">
      <AppHeader />
    <div class="container mt">
      <router-view />
    </div>
      <AppFooter />
  </div>
</template>
  
<style>
.page {
  max-width: 500px;
  margin: auto;
}

.container.mt{
  margin-bottom: 80px;
  margin-top: 80px;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #343A40;
  color: white;
  text-align: center;
  height: 50px;
}

.header {
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #343A40;
}

</style>
    