<template>
    <Form @submit="submitbook">
        <div class="form-group">
            <label for="name">Tên Sách:</label>
            <Field name="name" type="text" class="form-control" v-model="bookLocal.name" />
            <ErrorMessage name="name" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="author">Tác Giả</label>
            <Field name="author" type="text" class="form-control" v-model="bookLocal.author" />
            <ErrorMessage name="author" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="content">Nội Dung Sơ Lược</label>
            <Field name="content" type="text" class="form-control" v-model="bookLocal.content" />
            <ErrorMessage name="content" class="error-feedback" />
        </div>
        <div class="form-group form-check">
            <input name="important" type="checkbox" class="form-check-input" v-model="bookLocal.important" />
            <label for="important" class="form-check-label">
                <strong>Quan Trọng</strong>
            </label>
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button v-if="bookLocal._id" type="button" class="ml-2 btn btn-danger" @click="deletebook">
                Xóa
            </button>
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
    emits: ["submit:book", "delete:book"],
    props: {
        book: { type: Object, required: true }
    },
    data() {
        const contactFormSchema = yup.object().shape({
            // title: yup
            //     .string()
            //     .required("Tiêu đề phải có giá trị.")
            //     .min(2, "Tiêu đề phải ít nhất 2 ký tự.")
            //     .max(50, "Tiêu đề có nhiều nhất 50 ký tự."),
            // content: yup.string()
            //     .min(10, "Nội dung tối thiểu 10 ký tự."),
        });
        return {
            bookLocal: this.book,
        };
    },
    methods: {
        submitbook() {
            this.$emit("submit:book", this.bookLocal);
        },
        deletebook() {
            this.$emit("delete:book", this.bookLocal.id);
        },
    },
};
</script>
<style scoped>
    @import "@/assets/form.css";
    @import "@/assets/main.css";
</style>