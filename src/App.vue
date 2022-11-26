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
  height: 100%;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #FFFACD;
  color: white;
  text-align: center;
  height: 50px;
}

.header.navbar {
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  padding-top: 0;
  padding-bottom: 0;
  background-color: #FFFACD;
}

li.nav-item a.navbar-brand {
  padding: 20px 40px;
  width: 180px;
  margin-right: 0px;
  text-align: center;
  color: #B8860B;
  font-weight: 500;
}

li.nav-item {
  margin: 0;
}

li.nav-item a.navbar-brand:hover {
  background-color: #D2691E;
  color: #FFA500;
  font-weight: 600;
}

h4 {
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
  font-size: 40px;
  color: rgb(138, 54, 54);
}

</style>
    