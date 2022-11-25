<template>
    <div class="page">
        <h4>Đăng Ký</h4>
        <registerForm :user="user" @submit:user="signUp" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import registerForm from "@/components/registerForm.vue";
import userService from "@/services/user.service";
export default {
    components: {
       registerForm,
    },
    data() {
        return {
            user: {},
            message: "",
        };
    },
    methods: {
        async signUp(data) {
            try {
                await userService.create(data);
                this.message = "Đăng ký thành công.";
                // this.$router.push({ name: "user" });
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