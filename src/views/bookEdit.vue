<template>
    <div v-if="book" class="page">
        <h4>Chỉnh Sửa Thông Tin Sách</h4>
        <ContactForm :book="book" @submit:book="updateContact" @delete:book="deleteContact" />
        <p>{{ message }}</p>
    </div>
</template>
<script>
import ContactForm from "@/components/bookForm.vue";
import ContactService from "@/services/book.service";
export default {
    components: {
        ContactForm,
    },
    props: {
        id: { type: String, required: true },
    },
    data() {
        return {
            book: null,
            message: "",
        };
    },
    methods: {
        async getContact(id) {
            try {
                this.book = await ContactService.get(id);
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
                await ContactService.update(this.book._id, data);
                this.message = "Thông tin sách được cập nhật thành công.";
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        },
        async deleteContact() {
            if (confirm("Bạn muốn xóa Sách này?")) {
                try {
                    await ContactService.delete(this.book._id);
                    this.$router.push({ name: "books" });
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
