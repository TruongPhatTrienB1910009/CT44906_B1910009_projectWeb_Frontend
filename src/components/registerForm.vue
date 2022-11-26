<template>
    <!-- <Form @submit="SignUp" :validation-schema="registerFormSchema">
        <div class="form-group">
            <label for="email">E-mail</label>
            <Field name="email" type="email" class="form-control" v-model="userLocal.email" />
            <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="password">Mật Khẩu</label>
            <Field name="password" type="password" class="form-control" v-model="userLocal.password" />
            <ErrorMessage name="password" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="confirmPassword">Xác Nhận Lại Mật Khẩu</label>
            <Field name="confirmPassword" type="password" class="form-control" v-model="userLocal.confirmPassword" />
            <ErrorMessage name="confirmPassword" class="error-feedback" />
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Đăng Ký</button>
            <button type="button" class="ml-2 btn btn-danger" @click="gotoSignIn">
                Đăng Nhập
            </button>
        </div>
    </Form> -->

    <div id="register" class="card mb-3">
        <h4>Đăng Ký</h4>
        <div class="row g-0 d-flex align-items-center">
            <div class="col-lg-12">
                <div class="card-body">
                    <Form @submit="SignUp" :validation-schema="registerFormSchema">
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <Field name="email" type="email" class="form-control" v-model="userLocal.email" />
                            <ErrorMessage name="email" class="error-feedback" />
                        </div>
                        <div class="form-group">
                            <label for="password">Mật Khẩu</label>
                            <Field name="password" type="password" class="form-control" v-model="userLocal.password" />
                            <ErrorMessage name="password" class="error-feedback" />
                        </div>
                        <div class="form-group">
                            <label for="confirmPassword">Xác Nhận Lại Mật Khẩu</label>
                            <Field name="confirmPassword" type="password" class="form-control" v-model="userLocal.confirmPassword" />
                            <ErrorMessage name="confirmPassword" class="error-feedback" />
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary">Đăng Ký</button>
                            <button type="button" class="ml-2 btn btn-danger" @click="gotoSignIn">
                                Đăng Nhập
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
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
        const registerFormSchema = yup.object({
            email: yup
                .string()
                .required("E-mail phải có giá trị.")
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            password: yup
                .string()
                .required("Mật khẩu phải có giá trị.")
                .min(6, "Mật khẩu tối thiểu 6 ký tự."),
            confirmPassword: yup
                .string()
                .required("Mật khẩu phải có giá trị.")
                .min(6, "Mật khẩu tối thiểu 6 ký tự.")
        });
        return {
            userLocal: this.user,
            registerFormSchema,
        };
        return {
            userLocal: this.user,
        };
    },
    methods: {
        SignUp() {
            console.log(this.userLocal);
            this.$emit("submit:user", this.userLocal);
        },
        gotoSignIn(){
            this.$router.push({ name: "user" });    
        }
    },
};
</script>
<style scoped>
    h4 {
        margin-top: 10px;
        font-size: 30px;
    }
    #register {
        margin-top: 100px;
        width: 100%;
        padding: 30px;
    }

   .rounded-t-5 {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
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