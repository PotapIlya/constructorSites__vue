<template>
  <div id="app" class="container">
    <Nav />
    <router-view/>
  </div>
</template>
<script>
  import Nav from '@/components/basic/nav'
  export default {
    components: {
      Nav
    }
  }
</script>
