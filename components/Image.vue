<template>
  <div>
    <img :src="path">
  </div>
</template>

<script>

export default {
  props: {
    path: {
      type: String,
      required: true
    }
  }
}
</script>
