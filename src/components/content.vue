<template>
    <div class="content">
        <h1 style="text-align: center">Content</h1>


        <template v-if="getAllSite.length">
            <section v-for="(section, i) in getAllSite" :key="i">
                <ButtonEditSection :indexSection="i" />

               <template v-if="section.rows.length">
                   <div
                       v-for="(rows, j) in section.rows" :key="j"
                       class="d-flex"
                   >
                       <div v-for="(row, k) in rows" :key="k"

                            v-html="renderHtml(row)"

                            @click="infoEl({
                                coords: {
                                   idxSection: i,
                                    idxRow: j,
                                    idxColumn: k,
                                },
                                ...row,
                                type: 'element'
                            })"
                       />
                   </div>
               </template>

            </section>
        </template>

    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import ButtonEditSection from "@/components/edit-panel/button-edit-section";
  export default {
    name: "Content",
    components: {
      ButtonEditSection
    },
    computed: {
      ...mapGetters([
        'getAllSite',
        'getAsideMenu',
      ]),
    },
    data: () => ({

    }),
    mounted() {
      //
    },
    watch: {
      //
    },
    methods: {
      renderHtml(row) {
        let style = ''
        if (row.style){
          for(let color in row.style){
            style += `${color.replace('_', '-')}: ${row.style[color]};`
          }
        }

        // хз, мб через NodeElements
        return this.getAsideMenu
          .find(aside => aside.id === row.parentId)
          .children.find(child => child.info.id === row.id)
          .html
          .replace('$TEXT', row.text)
          .replace('$STYLE', style)
      },
      infoEl(el){
        this.$store.commit('setEditPanel', el)
      }
    }
  }
</script>
