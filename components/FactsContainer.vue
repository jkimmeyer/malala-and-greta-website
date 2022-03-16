<template>
  <div :class="'fact-container '+size+' theme-'+theme+' '+format">
    <div class="fact-card">
      <div class="fact-bg-card" />
      <div class="fact-bg-card" />
      <button class="fact-card--button" @click="previousFact()">
        <SvgsChevronLeft class="fact-card--arrow" :class="themeClass" />
      </button>
      <!-- eslint-disable vue/require-v-for-key -->
      <div v-for="(fact, index) in facts" class="facts-wrapper">
        <div v-if="activeFactID === index" :class="'fact fact-'+index">
          <h3>{{ fact.headline }}</h3>
          <!-- eslint-disable vue/require-v-for-key -->
          <div class="paragraph-wrapper">
            <p v-for="(paragraph, pId) in fact.paragraphs" :key="pId">
              {{ paragraph }}
            </p>
          </div>
          <!-- eslint-enable -->
          <div class="fact-source">
            <div class="fact-line" />
            <p>{{ fact.source }}</p>
          </div>
        </div>
      </div>
      <button class="fact-card--button" @click="nextFact()">
        <SvgsChevronRight class="fact-card--arrow" :class="themeClass" />
      </button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    facts: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      default: 'md'
    },
    format: {
      type: String,
      default: 'quad'
    },
    theme: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      activeFactID: 0
    }
  },
  computed: {
    themeClass () {
      if (this.theme !== 'malala' && this.theme !== 'greta' && this.theme !== 'default') {
        // eslint-disable-next-line no-console
        console.log('Error using Image.vue: theme prop not valid')
        return
      }
      return this.theme
    }
  },
  methods: {
    nextFact () {
      this.activeFactID = (this.activeFactID + 1) % this.facts.length
    },
    previousFact () {
      this.activeFactID--
      if (this.activeFactID < 0) {
        this.activeFactID = this.facts.length - 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fact-container{
  min-width: 256px;
  position: relative;
  width: 100%;

  .fact-card, .fact-bg-card{
    box-shadow: 0 8px 8px rgba(0,0,0,0.25);
  }
  .fact-card--button {
    padding: var(--space-8);
    margin: var(--space-8);

    .fact-card--arrow {
      &.greta{
        fill: var(--color-text-greta-dark);
      }
      &.malala{
        fill: var(--color-text-malala-dark);
      }
    }
    .fact-card--arrow:hover {
      &.greta{
        fill: var(--glaucous);
      }
      &.malala{
        fill: var(--bronze);
      }
    }
    .fact-card--arrow:focus {
      &.greta{
        fill: var(--glaucous);
      }
      &.malala{
        fill: var(--bronze);
      }
    }
    .fact-card--arrow:active {
      &.greta{
        fill: var(--color-text-greta);
      }
      &.malala{
        fill: var(--color-text-malala);
      }
    }

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
      z-index: -1;
      height: 100%;
    }

    &:nth-child(2){
      transform: rotate(4deg);
      top: 10px;
      left: 10px;
      z-index: -2;
      height: 100%;
    }
  }

  &.sm{
    &.quad{
      .fact-card, .fact-bg-card{
        width: 100%;
        max-width: 512px;
        min-height: 512px;
      }
    }
    &.rect{
      .fact-card, .fact-bg-card{
        width: 100%;
        max-width: 682px;
        min-height: 512px;
      }
    }
  }

  &.lg{
    &.quad{
      .fact-card, .fact-bg-card{
        width: 100%;
        max-width: 768px;
        min-height: 768px;
      }
    }
    &.rect{
      .fact-card, .fact-bg-card{
        width: 100%;
        max-width: 1024px;
        min-height: 768px;
      }
    }
  }

  &.theme-greta{
    .fact-card, .fact-bg-card{
      background-color: var(--color-background-greta-highlight);

      & h3 , p, .arrow{
        color: var(--color-text-greta-dark);
      }

      & .fact-line{
        background-color: var(--color-text-greta-dark);
      }
    }
  }
  &.theme-malala{
    .fact-card, .fact-bg-card{
      background-color: var(--color-background-malala-highlight);

      & h3, p, .arrow{
        color: var(--color-text-malala-dark);
      }

      & .fact-line{
        background-color: var(--color-text-malala-dark);
      }
    }
  }
}
</style>
