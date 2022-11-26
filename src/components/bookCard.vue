<script>
    export default {
        props: {
            note: { type: Object, required: true },
        },
        data() {
            return {
                href: this.note.linkBook,
                src: this.note.linkImage,
            }
        },
    };
</script>
<template>
    <div>
        <div class="p-1">
            <img :src="src" width="200" height="300">
        </div>
        <div class="p-1">
            <strong>Tên Sách: </strong>
            {{ note.name }}
        </div>
        <div class="p-1">
            <strong>Tác Giả: </strong>
            {{ note.author }}
        </div>
        <div class="p-1">
            <strong>Link Sách: </strong>
            <a :href="href">{{ note.linkBook }}</a>
        </div>
        <div class="p-1">
            <strong>Nội Dung Sơ Lược: </strong>
            {{ note.content }}
        </div>
        <div class="p-1">
            <strong>Quan Trọng:&nbsp;</strong>
            <i v-if="note.important" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div>
    </div>
</template>