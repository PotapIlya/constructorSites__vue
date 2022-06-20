<template>
    <div class="edit-section__button">
        <button @click="$store.commit('')">edit</button>
    </div>
</template>

<script>
  export default {
    name: "button-edit-section"
  }
</script>
<style>
    section{
        position: relative;
    }
    .edit-section__button{
        position: absolute;
        top: 0;
        right: 0;
    }
</style>
