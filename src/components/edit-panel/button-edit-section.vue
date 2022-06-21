<template>
    <div class="edit-section__button">
        <button v-if="!getEditGrid"
								@click="$store.commit('changeStatusEditGrid', true)">
            active edit grid
        </button>
				<button v-else
								@click="$store.commit('changeStatusEditGrid', false)">
					disable edit grid
				</button>
    </div>
</template>

<script>
  export default {
    name: "button-edit-section",
    props: {
    },
		computed: {
			getEditGrid(){
				return this.$store.getters.getEditGrid;
			}
		}
  }
</script>
