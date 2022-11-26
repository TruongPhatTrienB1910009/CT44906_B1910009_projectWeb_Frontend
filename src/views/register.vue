<template>
    <div class="page">
        <!-- <h4>Đăng Ký</h4> -->
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
                if(data.password === data.confirmPassword){
                    await userService.create(data);
                    this.message = "Đăng ký thành công.";
                }else{
                    this.message = "Mật khẩu không trùng khớp.";
                }
                // this.$router.push({ name: "user" });
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style scoped>
    h4 {
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .card.mb-3 {
        margin-top: 50px;
        width: 100%;
        padding: 30px;
    }
   .rounded-t-5 {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }

    img {
        padding: 20px;
        width: 130%;
    }

    @media (min-width: 992px) {
        .rounded-tr-lg-0 {
            border-top-right-radius: 0;
        }

        .rounded-bl-lg-5 {
            border-bottom-left-radius: 0.5rem;
        }
    }
</style>