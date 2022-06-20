<template>



    <ul v-if="Object.keys(value).length">
        <li v-if="value.background_color">
            <label for="">
                <span>Текст за элементом</span>
                <input type="color" v-model="value.background_color">
            </label>
        </li>
        <li v-if="value.color">
            <label for="">
                <span>Текст на элементе</span>
                <input type="color" v-model="value.color">
            </label>
        </li>
    </ul>


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
