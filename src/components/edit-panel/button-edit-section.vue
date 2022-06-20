<template>
    <div class="edit-section__button">
        <button @click="$store.commit('setEditPanel', {
          indexSection,
          type: 'button-edit-section'
        })"
        >
            edit
        </button>
    </div>
</template>

<script>
  export default {
    name: "button-edit-section",
    props: {
      indexSection: {
        required: true,
        type: Number
      }
    }
  }
</script>
