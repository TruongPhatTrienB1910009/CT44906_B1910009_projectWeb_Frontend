<template>
    <div class="page">
        <h4>Đăng Nhập</h4>
        <userForm :user="user" @submit:user="signIn" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import userForm from "@/components/userForm.vue";
import userService from "@/services/user.service";
export default {
    components: {
        userForm,
    },
    data() {
        return {
            user: {},
            message: "",
        };
    },
    methods: {
        async signIn(data) {
            console.log(data);
            try {
                await userService.get(this.user.email);
                this.message = "Đăng nhập thành công.";
                this.$router.push({ name: "notes" });
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
<style scoped>
    @import "@/assets/form.css";    
</style>