<template>
   <li>
       <span
           @click="statusShowChildren = !statusShowChildren"
       >
           {{value.title}}
       </span>
       <ul
           v-if="value.children.length"
           :class="{'d-none' : statusShowChildren}"
       >
           <li v-for="(children, j) in value.children" :key="j">
               <span @click="selectEl(children)">
                   {{children.title}}
               </span>
           </li>
       </ul>
   </li>
</template>

<script>
  export default {
    name: "Aside",
    props: {
      value: {
        type: Object,
        required: true,
      }
    },
    data: () => ({
      statusShowChildren: false,
    }),
    methods: {
      selectEl(el) {
        this.$store.commit('setCurrentEl', el.html)
      }
    }
  }
</script>
