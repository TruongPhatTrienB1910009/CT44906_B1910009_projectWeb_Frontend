<template>
    <div class="page row">
        <div class="col-md-12">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-6">
            <h4>
                Ghi Chú
            </h4>
            <ContactList v-if="filteredContactsCount > 0" :notes="filteredContacts"
                v-model:activeIndex="activeIndex" />
            <p v-else>Không có ghi chú nào.</p>
            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-primary" @click="refreshList()">
                    <i class="fas fa-redo"></i> Làm mới
                </button>
                <!-- <button class="btn btn-sm btn-success" @click="goToAddNote">
                    <i class="fas fa-plus"></i> Thêm mới
                </button> -->
                <button class="btn btn-sm btn-danger" @click="removeAllContacts">
                    <i class="fas fa-trash"></i> Xóa tất cả
                </button>
            </div>
        </div>
        <div class="mt-3 col-md-6">
            <div v-if="activeContact">
                <h4>
                    CHI TIẾT SÁCH
                </h4>
                <ContactCard :note="activeContact" />
                <router-link :to="{
                    name: 'book.edit',
                    params: { id: activeContact._id },
                }">
                    <span class="mt-2 badge badge-warning">
                        <i class="fas fa-edit"></i> Chỉnh Sửa Thông Tin Sách </span>
                </router-link>

            </div>
        </div>
    </div>
</template>

<script>
import ContactCard from "@/components/bookCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import ContactList from "@/components/bookList.vue";
import noteService from "@/services/book.service";
export default {
    components: {
        ContactCard,
        InputSearch,
        ContactList,
    },

    data() {
        return {
            notes: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    watch: {
        // Giám sát các thay đổi của biến searchText.
        // Bỏ chọn phần tử đang được chọn trong danh sách.
        searchText() {
            this.activeIndex = -1;
        },
    },
    computed: {
        // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.
        contactStrings() {
            return this.notes.map((note) => {
                const { title, content } = note;
                return [title, content].join("");
            });
        },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
        filteredContacts() {
            console.log(this.searchText);
            if (!this.searchText) return this.notes;
            return this.notes.filter((_contact, index) =>
                this.contactStrings[index].includes(this.searchText)
            );
        },
        activeContact() {
            if (this.activeIndex < 0) return null;
            return this.filteredContacts[this.activeIndex];
        },
        filteredContactsCount() {
            return this.filteredContacts.length;
        },
    },
    methods: {
        async retrieveContacts() {
            try {
                this.notes = await noteService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveContacts();
            this.activeIndex = -1;
        },
        async removeAllContacts() {
            if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
                try {
                    await noteService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
        // goToAddNote() {
        //     this.$router.push({ name: "note.add" });
        // },
    },
    mounted() {
        this.refreshList();
    },

};
</script>
<style scoped>
.page {
    text-align: left;
    max-width: 100%;
}
</style>
