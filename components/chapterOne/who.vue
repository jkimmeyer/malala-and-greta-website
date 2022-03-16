<template>
  <div>
    <div class="who">
      Ich bin
    </div>
    <div class="relative">
      <img class="who--image -z-10" :src="image" data-animate-pin>
      <div class="who--name" data-animate-parallax="500">
        {{ firstName }} <br>
        {{ lastName }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.who {
  color: var(--color-text-dark);
}

.who,
.who--name {
  margin-left: var(--space-64);
  font-size: var(--font-64);
  font-weight: 300;
  line-height: var(--line-1-15);
  text-transform: uppercase;
}

.who--name {
  position: absolute;
  top: 0;
  color: var(--color-text-neutral-light);
}

.who--image {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
</style>
