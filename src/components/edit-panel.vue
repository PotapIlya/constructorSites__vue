<template>
    <div v-if="Object.keys(confEditPanel).length">
        {{ confEditPanel }}

        <ul>
            <li v-if="confEditPanel.text">
                <label for="">
                    <span>Текст на элементе</span>
                    <input type="text" v-model="confEditPanel.text">
                </label>
            </li>
            <template v-if="confEditPanel.style">
                <li v-if="confEditPanel.style.background_color">
                    <label for="">
                        <span>Текст за элементом</span>
                        <input type="color" v-model="confEditPanel.style.background_color">
                    </label>
                </li>
                <li v-if="confEditPanel.style.color">
                    <label for="">
                        <span>Текст на элементе</span>
                        <input type="color" v-model="confEditPanel.style.color">
                    </label>
                </li>
            </template>
        </ul>

        <button @click="$store.commit('closeEditPanel')">Close</button>
    </div>
</template>

<script>
  export default {
    name: "edit-panel",
    computed: {
      confEditPanel() {
        return this.$store.getters.getEditPanel
      }
    }
  }
</script>

