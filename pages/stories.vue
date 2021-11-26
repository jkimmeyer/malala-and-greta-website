<template>
  <div class="page">
    <div
      class="page--first"
      :class="malala ? null : 'active'"
    >
      <Malala @click="switchPage()" />
    </div>
    <div
      class="page--second"
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
.page {
  overflow-x: hidden;
  position: relative;
  width: 100vw;
  height: 100vh;
}

.page--first,
.page--second {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateX(0);
  transition: transform ease-in-out 1s;
}

.page--first.active {
  transform: translateX(-100%);
}

.page--second.active {
  transform: translateX(100%);
}
</style>
