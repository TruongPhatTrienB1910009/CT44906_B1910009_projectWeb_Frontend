<template>
    <div class="page row">
        <div class="col-md-12">
            <InputSearch v-model="searchText" />
        </div>
        <div class="mt-3 col-md-6">
            <h4>
                SÁCH
            </h4>
            <ContactList v-if="filteredContactsCount > 0" :books="filteredContacts"
                v-model:activeIndex="activeIndex" />
            <p v-else>Không có ghi chú nào.</p>
            <div class="mt-3 row justify-content-around align-items-center">
                <button class="btn btn-sm btn-primary" @click="refreshList()">
                    <i class="fas fa-redo"></i> Làm mới
                </button>
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
                <ContactCard :book="activeContact" />
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
import bookService from "@/services/book.service";
export default {
    components: {
        ContactCard,
        InputSearch,
        ContactList,
    },

    data() {
        return {
            books: [],
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
            return this.books.map((book) => {
                const { title, content } = book;
                return [title, content].join("");
            });
        },
        // Trả về các contact có chứa thông tin cần tìm kiếm.
        filteredContacts() {
            console.log(this.searchText);
            if (!this.searchText) return this.books;
            return this.books.filter((_contact, index) =>
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
                this.books = await bookService.getAll();
            } catch (error) {
                console.log(error);
            }
        },
        refreshList() {
            this.retrieveContacts();
            this.activeIndex = -1;
        },
        async removeAllContacts() {
            if (confirm("Bạn muốn xóa tất cả Thông Tin Sách?")) {
                try {
                    await bookService.deleteAll();
                    this.refreshList();
                } catch (error) {
                    console.log(error);
                }
            }
        },
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
