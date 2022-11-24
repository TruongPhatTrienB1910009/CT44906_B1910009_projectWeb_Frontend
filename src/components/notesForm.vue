<template>
    <Form @submit="submitNote">
        <div class="form-group">
            <label for="title">Tiêu Đề</label>
            <Field name="title" type="text" class="form-control" v-model="noteLocal.title" />
            <ErrorMessage name="title" class="error-feedback" />
        </div>
        <div class="form-group">
            <label for="content">Nội Dung</label>
            <Field name="content" type="text" class="form-control" v-model="noteLocal.content" />
            <ErrorMessage name="content" class="error-feedback" />
        </div>
        <div class="form-group form-check">
            <input name="important" type="checkbox" class="form-check-input" v-model="noteLocal.important" />
            <label for="important" class="form-check-label">
                <strong>Ghi Chú Quan Trọng</strong>
            </label>
        </div>
        <div class="form-group">
            <button class="btn btn-primary">Lưu</button>
            <button v-if="noteLocal._id" type="button" class="ml-2 btn btn-danger" @click="deleteNote">
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
    emits: ["submit:note", "delete:note"],
    props: {
        note: { type: Object, required: true }
    },
    data() {
        // const contactFormSchema = yup.object().shape({
        //     name: yup
        //         .string()
        //         .required("Tên phải có giá trị.")
        //         .min(2, "Tên phải ít nhất 2 ký tự.")
        //         .max(50, "Tên có nhiều nhất 50 ký tự."),
        //     email: yup
        //         .string()
        //         .email("E-mail không đúng.")
        //         .max(50, "E-mail tối đa 50 ký tự."),
        //     address: yup.string().max(100, "Địa chỉ tối đa 100 ký tự."),
        //     phone: yup
        //         .string()
        //         .matches(
        //             /((09|03|07|08|05)+([0-9]{8})\b)/g,
        //             "Số điện thoại không hợp lệ."
        //         ),
        // });
        return {
            // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
            // contactLocal để liên kết với các input trên form
            noteLocal: this.note,
            // contactFormSchema,
        };
    },
    methods: {
        submitNote() {
            this.$emit("submit:note", this.noteLocal);
        },
        deleteNote() {
            this.$emit("delete:note", this.noteLocal.id);
        },
    },
};
</script>
<style scoped>
@import "@/assets/form.css";
</style>