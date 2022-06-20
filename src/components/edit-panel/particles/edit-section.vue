<template>
    <div v-if="Object.keys(value).length">
        edit-section
    </div>
</template>

<script>
  export default {
    name: "edit-section",
    props: {
      value: {
        type: Object,
        required: true,
      }
    }
  }
</script>
