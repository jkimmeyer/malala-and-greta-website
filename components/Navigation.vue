<template>
  <nav class="navigation">
    <h2 class="navigation--title visually-hidden">
      Navigation
    </h2>

    <ul class="navigation--list">
      <li class="navigation--list-item">
        <button :aria-label="audioOn ? 'Audio ausschalten' : 'Audio einschalten'" class="navigation--button" @click="$emit('toggle-audio')">
          <Icon v-if="audioOn" color="var(--color-background-greta-dark)" icon="speakerOff" height="48px" />
          <Icon v-else color="var(--color-background-greta-dark)" icon="speakerOn" height="48px" />
        </button>
      </li>
      <li class="navigation--list-item is-separator" />
      <li v-for="chapter in chapters" :key="chapter" class="navigation--list-item is-page">
        <a class="navigation--link" href="#">
          {{ chapter }}
        </a>
      </li>
      <li class="navigation--list-item is-separator" />
      <li class="navigation--list-item">
        <ToggleSwitch />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    audioOn: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      chapters: ['1', '2', '3', '4', '5']
    }
  }
}
</script>

<style lang="scss" scoped>
  .navigation {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .navigation--list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    margin: 0;
    height: 100%;
    padding: var(--space-16);
  }

  .navigation--list-item.is-page {
    height: var(--space-32);
    width: var(--space-4);
    background-color: var(--color-background-greta-dark);
  }

  .navigation--list-item.is-page.is-current {
    height: var(--space-48);
  }

  .navigation--list-item.is-separator {
    height: var(--space-64);
    width: var(--space-4);
    background-color: var(--color-background-greta-dark);
  }

    .navigation--list-item.is-separator:last-child {
    margin-top: auto;

  }

  .navigation--button {
    background: none;
    border: none;
  }
</style>
