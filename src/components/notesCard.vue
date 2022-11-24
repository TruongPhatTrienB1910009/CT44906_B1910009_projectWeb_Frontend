<script>
export default {
    props: {
        note: { type: Object, required: true },
    },
};
</script>
<template>
    <div>
        <div class="p-1">
            <strong>Tiêu Đề:</strong>
            {{ note.title }}
        </div>
        <div class="p-1">
            <strong>Nội Dung:</strong>
            {{ note.content }}
        </div>
        <div class="p-1">
            <strong>Nội Dung Quan Trọng:&nbsp;</strong>
            <i v-if="note.important" class="fas fa-check"></i>
            <i v-else class="fas fa-times"></i>
        </div>
    </div>
</template>