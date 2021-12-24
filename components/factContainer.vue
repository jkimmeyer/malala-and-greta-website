<template>

  <div :class="'fact-container '+postData.size+' '+postData.theme+' '+postData.format">
    <div class="fact-bg-card"></div>
    <div class="fact-bg-card"></div>
    <div class="fact-card">
      <div class="prev-arrow arrow" @click="previousFact()"> 	&lt; </div>
      <!-- eslint-disable vue/require-v-for-key -->
      <div class="facts-wrapper" v-for="(fact, index) in facts">
        <div :class="'fact fact-'+index" v-if="activeFactID === index">
          <h3>{{fact.headline}}</h3>
          <!-- eslint-disable vue/require-v-for-key -->
          <div class="paragraph-wrapper">
            <p v-for="paragraph in fact.paragraphs">
              {{paragraph}}
            </p>
          </div>
          <!-- eslint-enable -->
          <div class="fact-source">
            <div class="fact-line"></div>
            <p>{{fact.source}}</p>
          </div>
        </div>
      </div>
      <div class="next-arrow arrow" @click="nextFact()"> 	&gt; </div>
    </div>
  </div>

</template>

<script>

export default{
  props: {
    postData: {
      default: {
        theme: 'malala',
        size: 'md',
        facts: [],
        format: 'quad'
      },
      type: Object
    }
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
  //start: only for dev purpose
  margin:5rem 0 0 5rem;
  //end: only for dev purpose

  min-width: 256px;
  position: relative;

  .fact-card, .fact-bg-card{
    box-shadow: 0 8px 8px rgba(0,0,0,0.25);
  }

  .fact-card{
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    z-index: 2;

    .facts-wrapper{
      height: 100%;
      padding: 1rem 0;

      .fact{
        height: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        h3{
          font-family: Trochut;
          font-weight: bold;
          font-size: 36px;
        }

        p{
          font-family: Lato;
          font-style: italic;
          font-size: 18px;
          font-weight: 300;
        }

        .paragraph-wrapper p{
          margin: 0.5rem 0;
        }

        .fact-source{
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;

          .fact-line{
            height: 1px;
            width: 40px;
            margin-right: 0.5rem;
          }
        }
      }
    }
  }

  .fact-bg-card{
    position: absolute;

    &:nth-child(1){
      transform: rotate(-0.17deg);
      top: 25px;
      left: -15px;
      z-index: 0
    }

    &:nth-child(2){
      transform: rotate(4deg);
      top: 10px;
      left: 10px;
      z-index: 1;
    }
  }


  .arrow{
    padding: 2rem;
    cursor: pointer;

    &.next-arrow{
      margin-left: auto;
    }
  }

  &.sm{
    &.quad{
      .fact-card, .fact-bg-card{
        min-width: 512px;
        max-width: 512px;
        min-height: 512px;
      }
    }
    &.rect{
      .fact-card, .fact-bg-card{
        width: 682px;
        max-width: 682px;
        min-height: 512px;
      }
    }
  }

  &.lg{
    &.quad{
      .fact-card, .fact-bg-card{
        min-width: 768px;
        max-width: 768px;
        min-height: 768px;
      }
    }
    &.rect{
      .fact-card, .fact-bg-card{
        width: 1024px;
        max-width: 1024px;
        min-height: 768px;
      }
    }
  }

  &.greta{
    .fact-card, .fact-bg-card{
      background-color: #92BAE4;

      & h3 , p, .arrow{
        color: #445569;
      }

      & .fact-line{
        background-color: #445569;
      }
    }
  }
  &.malala{
    .fact-card, .fact-bg-card{
      background-color: #E1BC84;

      & h3, p, .arrow{
        color: #68573D;
      }

      & .fact-line{
        background-color: #68573D;
      }
    }
  }
}
</style>
