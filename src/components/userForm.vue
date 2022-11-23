<template>
    <Form @submit="SignIn">
        <div class="form-group">
            <label for="email">E-mail</label>
            <Field name="email" type="email" class="form-control" v-model="userLocal.email" />
            <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="address">Mật Khẩu</label>
            <Field name="password" type="password" class="form-control" v-model="userLocal.password" />
            <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Đăng Nhập</button>
            <!-- <button v-if="contactLocal._id" type="button" class="ml-2 btn btn-danger" @click="deleteContact">
                Xóa
            </button> -->
        </div>
    </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    emits: ["submit:user"],
    props: {
        user: { type: Object, required: true }
    },
    data() {
        // const userFormSchema = yup.object().shape({
        //     email: yup
        //         .string()
        //         .email("E-mail không đúng.")
        //         .max(50, "E-mail tối đa 50 ký tự."),
        //     password: yup.string().min(6, "Mật khẩu tối thiểu 6 ký tự."),
        // });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // contactLocal để liên kết với các input trên form
            userLocal: this.user,
            // userFormSchema
        };
    },
    methods: {
        SignIn() {
            console.log(this.userLocal);
            this.$emit("submit:user", this.userLocal);
        },
        // deleteContact() {
        //     this.$emit("delete:contact", this.contactLocal.id);
        // },
    },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>