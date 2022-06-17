<template>
    <ul v-if="asideMenu.length">
        <asideItem
            v-for="(parent, i) in asideMenu" :key="i"
            :value="parent"
        />
    </ul>
</template>

<script>
  import {asideMenu} from '@/static/aside-menu';
  import asideItem from './paticals/aside-item';
  export default {
    name: "Aside",
    components: {
      asideItem
    },
    data: () => ({
      asideMenu
    }),
  }
</script>
