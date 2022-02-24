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
    }
  }
}
</script>
<style>
.image {
  display: inline-block;
  position: relative;
}

.image--decoration-top-left {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-35%, -35%);
}

.image--decoration-top-right{
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(35%, -35%);
}

.image--decoration-bottom-left{
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-35%, 35%);
}

.image--decoration-bottom-right{
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(35%, 35%);
}
</style>
