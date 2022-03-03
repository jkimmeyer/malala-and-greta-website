<template>
  <div class="image" :class="themeClass">
    <img :src="path">
    <SvgsDecorationTopLeft v-if="decorationTopLeft" class="image--decoration top-left" />
    <SvgsDecorationTopRight v-if="decorationTopRight" class="image--decoration top-right" />
    <SvgsDecorationBottomLeft v-if="decorationBottomLeft" class="image--decoration bottom-left" />
    <SvgsDecorationBottomRight v-if="decorationBottomRight" class="image--decoration bottom-right" />
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    decorationTopLeft: {
      type: Boolean
    },
    decorationTopRight: {
      type: Boolean
    },
    decorationBottomLeft: {
      type: Boolean
    },
    decorationBottomRight: {
      type: Boolean
    },
    isMalala: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    themeClass () {
      return this.isMalala ? 'malala' : 'greta'
    }
  }
}
</script>
<style>
.image {
  display: inline-block;
  position: relative;
}

.image--decoration {
  position: absolute;
}

.image.malala .image--decoration  {
  stroke: var(--color-text-malala-dark);
  max-width: 3vw;
  max-height: 3vw;
}

.image.greta .image--decoration  {
  stroke: var(--color-text-greta-dark);
}

.image--decoration.top-left {
  top: 0;
  left: 0;
  transform: translate(-35%, -35%);
}

.image--decoration.top-right{
  top: 0;
  right: 0;
  transform: translate(35%, -35%);
}

.image--decoration.bottom-left{
  bottom: 0;
  left: 0;
  transform: translate(-35%, 35%);
}

.image--decoration.bottom-right{
  right: 0;
  bottom: 0;
  transform: translate(35%, 35%);
}
</style>
