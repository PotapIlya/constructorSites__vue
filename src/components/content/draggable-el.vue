<template>
    <div class="draggable__el">
        <div
                class="d-flex justify-content-center"
            v-html="renderHtml(value.row)"
            @click="infoEl({
                coords: value.coords,
                ...value.row,
                type: 'element'
            })"
    />
<!--        <button v-if="getEditGrid"-->
<!--					@mousedown="mouse(true)"-->
<!--					@mouseup="mouse(false)"-->
<!--					class="draggable__el-btn draggable__el-btn-left"-->
<!--				>-->
<!--					12-->
<!--				</button>-->
<!--        <button v-if="getEditGrid"-->
<!--					@mousedown="mouse(true)"-->
<!--					@mouseup="mouse(false)"-->
<!--					class="draggable__el-btn draggable__el-btn-right"-->
<!--				>-->
<!--					12-->
<!--				</button>-->
    </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
      name: 'draggable-el',
      props: {
				value: {
					type: Object,
					required: true,
				}
      },
      computed: {
				...mapGetters([
					'getAsideMenu',
					'getEditGrid'
				]),
      },
      methods: {
        mouse(status) {
          // console.log(status)
        },
        infoEl(el){
          // console.log(el)
          this.$store.commit('setEditPanel', el)
        },
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
      }
    }
</script>
