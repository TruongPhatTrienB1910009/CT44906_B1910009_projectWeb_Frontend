<template>
    <!-- <Form @submit="SignIn" :validation-schema="userFormSchema">
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
            <button class="btn btn-primary">Đăng Nhập</button>
            <button type="button" class="ml-2 btn btn-danger" @click="gotoSignUp">
                Đăng Ký
            </button>
        </div>
    </Form> -->
    <div class="card mb-3">
        <h4>Đăng Nhập</h4>
        <div class="row g-0 d-flex align-items-center">
            <div class="col-lg-4 d-none d-lg-flex">
                <img src="data:image/png;base64,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"/>
            </div>
            <div class="col-lg-8">
                <div class="card-body">

                    <Form @submit="SignIn" :validation-schema="userFormSchema">
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
                            <button class="btn btn-primary">Đăng Nhập</button>
                            <button type="button" class="ml-2 btn btn-danger" @click="gotoSignUp">
                                Đăng Ký
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
        const userFormSchema = yup.object({
            email: yup
                .string()
                .required("E-mail phải có giá trị.")
                .email("E-mail không đúng.")
                .max(50, "E-mail tối đa 50 ký tự."),
            password: yup
                .string()
                .required("Mật khẩu phải có giá trị.")
                .min(6, "Mật khẩu tối thiểu 6 ký tự.")
        });
        return {
            userLocal: this.user,
            userFormSchema,
        };
    },
    methods: {
        
        SignIn() {
            console.log(this.userLocal);
            this.$emit("submit:user", this.userLocal);
        },
        gotoSignUp(){
            this.$router.push({ name: "register" });
        }
    },
};
</script>
<style scoped>
    h4 {
        margin-top: 10px;
        font-size: 30px;
    }
    .card.mb-3 {
        margin-top: 150px;
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