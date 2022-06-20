<template>
    <div class="content">
        <h1 style="text-align: center">Content</h1>

        <template v-if="getAllSite.length">
            <section v-for="(section, i) in getAllSite" :key="i">
<!--                <ButtonEditSection :indexSection="i" />-->

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
                       >
                           <draggableEl
                                   :draggable="dragging"
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

                   </div>
               </template>

            </section>
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
      ]),
    },
    data: () => ({
      dragging: false,
    }),
    mounted() {
      // this.$on('changeDraggable', status => {
      //   console.log(status)
      //   this.draggable = status;
      // })
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
