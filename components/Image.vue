<template>
  <div class="image">
    <img :src="path">
    <SvgsDecorationTopLeft v-if="decorationTopLeft" class="image--decoration-top-left" />
    <SvgsDecorationTopRight v-if="decorationTopRight" class="image--decoration-top-right" />
    <SvgsDecorationBottomLeft v-if="decorationBottomLeft" class="image--decoration-bottom-left" />
    <SvgsDecorationBottomRight v-if="decorationBottomRight" class="image--decoration-bottom-right" />
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
      type: Boolean,
      default: true
    },
    decorationTopRight: {
      type: Boolean,
      default: true
    },
    decorationBottomLeft: {
      type: Boolean
    },
    decorationBottomRight: {
      type: Boolean
    }
  }
}
</script>
<style>
.image {
  position: relative;
}

.image--decoration-top-left {
  position: absolute;
  top: -10px;
  left: -10px;
}

.image--decoration-top-right{
  position: absolute;
  top: -10px;
  right: 10px;
}

.image--decoration-bottom-left{
  position: absolute;
  bottom: 10px;
  left: -10px;
}

.image--decoration-bottom-right{
  position: absolute;
  right: 10px;
  bottom: 10px;
}
</style>
