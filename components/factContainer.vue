<template>

  <div :class="'fact-container '+postData.size+' '+postData.theme">
    <div class="prev-arrow arrow" @click="previousFact()"> 	&lt; </div>
    <!-- eslint-disable vue/require-v-for-key -->
    <div v-for="(fact, index) in facts">
      <div :class="'fact fact-'+index" v-if="activeFactID === index">
        <h3>{{fact.headline}}</h3>
        <!-- eslint-disable vue/require-v-for-key -->
        <p v-for="paragraph in fact.paragraphs">
          {{paragraph}}
        </p>
        <!-- eslint-enable -->
        <p>Quelle: {{fact.source}}</p>
      </div>
    </div>
    <div class="next-arrow arrow" @click="nextFact()"> 	&gt; </div>
  </div>

</template>

<script>

export default{
  props: {
    postData: Object
  },
  data () {
    return {
      facts: this.postData.facts,
      activeFactID: 0
    }
  },
  mounted (){

  },
  methods: {
    nextFact(){
      this.activeFactID = (this.activeFactID + 1) % this.facts.length;
    },
    previousFact(){
      this.activeFactID--;
      if(this.activeFactID < 0){
        this.activeFactID = this.facts.length-1;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fact-container{
  min-width: 256px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;


  .arrow{
    height: 100%;
    padding: 1rem;
    cursor: pointer;

    &.next-arrow{
      margin-left: auto;
    }
  }

  &.sm{
    max-width: 256px;
  }

  &.lg{
    max-width: 512px;
  }

  &.greta{
    background-color: #92BAE4;

    & h3{
      color: #445569;
    }
  }
  &.malala{
    background-color: #E1BC84;

    & h3 {
      color: #68573D;
    }
  }
}
</style>
