<template>
    <nav  class="navbar navbar-expand navbar-dark bg-dark justify-content-center ">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="/notes" class="navbar-brand">GHI CHÚ</a>
            </li>
            <li class="nav-item">
                <a href="#" @click="gotoAdd" class="navbar-brand">THÊM MỚI</a>
            </li>
            <li class="nav-item">
                <router-link :to="{ name: 'user' }" class="navbar-brand">
                    ĐĂNG XUẤT
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    methods: {
        gotoAdd(){
            this.$router.push({ name: "note.add" });
        }
    }
}
</script>

<style scoped>
    @import "@/assets/main.css";
</style>