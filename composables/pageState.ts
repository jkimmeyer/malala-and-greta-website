const inEnd = ref(false)

const setInEnd = (value: boolean) => {
  inEnd.value = value
}

const getInEnd = computed(() => inEnd.value)

export {
  setInEnd,
  getInEnd
}
