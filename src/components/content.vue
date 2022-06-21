<template>
    <div class="content">
        <h1 style="text-align: center">Content</h1>
				<ButtonEditSection />

        <template v-if="getAllSite.length">
            <section v-for="(section, i) in getAllSite" :key="i">


               <template v-if="section.rows.length">
                   <div
                       v-for="(rows, j) in section.rows" :key="j"
                       class="d-flex"
                   >
                       <draggable class="draggable__container d-flex"
                                  :list="rows"
                                  @start="dragging = true"
                                  @end="dragging = false"
                                  :move="log"
																	:disabled="getEditGrid"
                       >
                           <draggableEl
                               class="w-6"
                               v-for="(row, k) in rows" :key="k"
                               :value="{
                                 row,
                                 coords: {
                                    idxSection: i,
                                    idxRow: j,
                                    idxColumn: k,
                                 }
                               }"
                           />
                       </draggable>
										 <button v-if="getEditGrid"
														 @click="$store.commit('editGridToAddSite', {
														 	 coords: {idxSection: i,	idxRow: j },
															 type: 'element'
														 })"
										 >
											 add el to row
										 </button>
                   </div>

								 <button v-if="getEditGrid"
												 @click="$store.commit('editGridToAddSite', {
													 coords: {idxSection: i },
													 type: 'row'
												 })"
								 >
									 add new row
								 </button>
               </template>

            </section>
					<button v-if="getEditGrid"
									@click="$store.commit('editGridToAddSite', {
									 type: 'section',
									 coords: {}
								 })"
					>add new section</button>
        </template>

    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import draggable from "vuedraggable";

  import ButtonEditSection from "@/components/edit-panel/button-edit-section";
  import draggableEl from "@/components/content/draggable-el";

  export default {
    name: "Content",
    components: {
      ButtonEditSection,
      draggable,
      draggableEl
    },
    computed: {
      ...mapGetters([
        'getAllSite',
				'getEditGrid'
      ]),
    },
    data: () => ({
      dragging: false,
			statusDrop: false,
    }),
    mounted() {
    },
    watch: {
      //
    },
    methods: {
      log(evt) {
        // console.log(evt);
      },
    }
  }
</script>
