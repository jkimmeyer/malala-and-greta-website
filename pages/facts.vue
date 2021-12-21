<template>
  <FactContainer :postData="{
      theme: 'greta',
      size: 'lg',
      facts: [gretaFact1,gretaFact2]
    }"
  />
</template>

<script>
import * as fact1 from '~/assets/facts/greta_fact_1.json';
import * as fact2 from '~/assets/facts/greta_fact_2.json';

export default {
  data () {
    return {
      gretaFact1: fact1.fact,
      gretaFact2: fact2.fact
    }
  }
}
</script>
