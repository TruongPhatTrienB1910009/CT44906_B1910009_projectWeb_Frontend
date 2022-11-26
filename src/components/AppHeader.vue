<template>
    <nav class="header navbar navbar-expand position-fixed">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a href="#" @click="gotoHome" class="navbar-brand">TRANG CHỦ</a>
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
            console.log(location.href);
            if (location.href !== "http://127.0.0.1:3001/" && location.href !== "http://localhost:3001/") {
                this.$router.push({ name: "book.add" });
            }
        },

        gotoHome(){
            console.log(location.href);
            if (location.href !== "http://127.0.0.1:3001/" && location.href !== "http://localhost:3001/") {
                this.$router.push({ name: "books" });
            }
        }
    }
}
</script>