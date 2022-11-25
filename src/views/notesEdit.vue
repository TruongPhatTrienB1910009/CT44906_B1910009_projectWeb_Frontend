<template>
    <div v-if="note" class="page">
        <h4>Chỉnh Sửa Ghi Chú</h4>
        <ContactForm :note="note" @submit:note="updateContact" @delete:note="deleteContact" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ContactForm from "@/components/notesForm.vue";
import ContactService from "@/services/note.service";
export default {
    components: {
        ContactForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            note: null,
            message: "",
        };
    },
    methods: {
        async getContact(id) {
            try {
                this.note = await ContactService.get(id);
            } catch (error) {
                console.log(error);
                // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                this.$router.push({
                    name: "notfound",
                    params: {
                        pathMatch: this.$route.path.split("/").slice(1)
                    },
                    query: this.$route.query,
                    hash: this.$route.hash,
                });
            }
        },
        async updateContact(data) {
            try {
                await ContactService.update(this.note._id, data);
                this.message = "Liên hệ được cập nhật thành công.";
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        },
        async deleteContact() {
            if (confirm("Bạn muốn xóa Liên hệ này?")) {
                try {
                    await ContactService.delete(this.note._id);
                    this.$router.push({ name: "notes" });
                } catch (error) {
                    console.log(error);
                }
            }
        },
    },
    created() {
        this.getContact(this.id);
        this.message = "";
    },
};
</script>

<style scoped>
    @import "@/assets/main.css";    
</style>
