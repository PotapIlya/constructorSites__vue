<template>
  <div class="d-flex justify-content-between">

    <Aside class="col-2" />

    <Content class="col-7" />

    <EditPanel class="col-2" />
  </div>
</template>

<script>
  import Aside from "@/components/basic/aside";
  import Content from "@/components/content";
  import EditPanel from "@/components/edit-panel/index";
  export default {
    name: 'Index',
    components: {
      Aside,
      Content,
      EditPanel
    },
  }
</script>
