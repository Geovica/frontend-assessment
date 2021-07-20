<template>
  <b-container
    fluid
    class="content d-flex flex-column justify-content-center align-item-center mb-3">
      <b-row>
          <b-col class="d-flex justify-content-center align-item-center">
            <Sections class="section"/>
            <Accordion class="accordion"/>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import Sections from '../components/Sections.vue'
import Accordion from '../components/Accordion.vue'

export default {
  name: 'Exe-2',
  components: {
    Sections,
    Accordion
  }
}
</script>

<style lang="scss" scoped>
  html,body{
    margin:0;
  }
  .content {
    height:85vh;
  }
  .accordion {
    display: none;
  }
  @media (max-width: 445px) {
    .accordion {
      display: block;
    }
    .section {
      display: none;
    }
  }
</style>
