<template>
  <fact :postData="{
      theme: 'greta',
      size: 'lg',
      fact: gretaFact1
    }"
  />
</template>

<script>
import { fact } from '~/assets/facts/greta_fact_1.json';

export default {
  data () {
    return {
      gretaFact1: fact
    }
  }
}
</script>
