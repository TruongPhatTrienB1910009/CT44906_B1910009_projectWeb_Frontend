<template>
    <div class="page">
        <h4>Thêm Sách Mới</h4>
        <ContactForm :book="book" @submit:book="addContact" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ContactForm from "@/components/bookForm.vue";
import notesService from "@/services/book.service";
export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            book: {},
            message: "",
        };
    },
    methods: {
        async addContact(data) {
            try {
                await notesService.create(data);
                this.message = "Thông tin sách được tạo mới thành công.";
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style scoped>
    @import "@/assets/main.css";    
</style>