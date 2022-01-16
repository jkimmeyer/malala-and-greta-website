<template>
  <div class="stories-page">
    <div
      class="stories-page--first"
      :class="malala ? null : 'active'"
    >
      <Malala @click="switchPage()" />
    </div>
    <div
      class="stories-page--second"
      :class="malala ? 'active' : null"
    >
      <Greta @click="switchPage()" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      malala: true,
      display1: true,
      display2: false
    }
  },
  methods: {
    switchPage () {
      this.malala = !this.malala
    }
  }
}
</script>

<style>
.stories-page {
  overflow-x: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
}

.stories-page--first,
.stories-page--second {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateX(0);
  transition: transform ease-in-out 1s;
}

.stories-page--first.active {
  transform: translateX(-100%);
}

.stories-page--second.active {
  transform: translateX(100%);
}
</style>
