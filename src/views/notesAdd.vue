<template>
    <div class="page">
        <h4>Thêm liên hệ</h4>
        <ContactForm :note="note" @submit:note="addContact" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ContactForm from "@/components/notesForm.vue";
import notesService from "@/services/note.service";
export default {
    components: {
        ContactForm,
    },
    data() {
        return {
            note: {},
            message: "",
        };
    },
    methods: {
        async addContact(data) {
            try {
                await notesService.create(data);
                this.message = "Liên hệ được tạo mới thành công.";
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>