<template>
    <ul v-if="input">
        <li>
            <label for="">
                <span>Текст на элементе</span>
                <input type="text" v-model="input">
            </label>
        </li>
    </ul>
</template>

<script>
  export default {
    name: "edit-section",
    props: {
      value: {
        type: String,
        required: true,
      }
    },
    computed: {
      input: {
        get() {
          console.log(this.value)
          return this.value;
        },
        set(value) {
          this.$emit('input', value);
        },
      }
    }
  }
</script>
