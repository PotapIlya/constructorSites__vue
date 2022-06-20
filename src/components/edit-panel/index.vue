<template>
    <div>  <!--  обертка, чтобы при пустом значение блок был  -->
        <div v-if="Object.keys(confEditPanel).length">
            {{ confEditPanel }}


                <editText :value="confEditPanel.text" v-model="confEditPanel.text" />
                <editStyle :value="confEditPanel.style" />

                <editSection :value="confEditPanel.section" />



            <button @click="$store.commit('closeEditPanel')">Close</button>
        </div>
    </div>
</template>

<script>
    import editStyle from './particles/edit-style';
    import editSection from './particles/edit-section';
    import editText from './particles/edit-text';
  export default {
    name: "edit-panel",
    components: {
      editSection,
      editStyle,
      editText,

    },
    computed: {
      confEditPanel() {
        return this.$store.getters.getEditPanel
      }
    }
  }
</script>

