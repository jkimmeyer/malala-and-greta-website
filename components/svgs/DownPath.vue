
<template>
  <svg
    :data-animate-timeline="'#svg-line' + svgId"
    width="787"
    height="225"
    viewBox="0 0 787 225"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path :id="'svg-line' + svgId" d="M461.5 8C488.873 5.58025 756.088 -7.62226 780.022 19.7312C788.972 29.9594 781.693 43.8927 773.9 52.0396C753.785 73.0694 717.989 72.3895 691.089 73.8053C521.654 82.723 349.654 102.621 182.315 130.94C119.914 141.5 68.9369 160.658 17.542 197.598C6.06125 205.85 -8.512 218.694 15.8416 220.724C40.9196 222.814 66.8947 221.064 92.0216 221.064" stroke="white" stroke-width="5" stroke-linecap="round" />
  </svg>
</template>
<script>
export default {
  props: {
    svgId: {
      type: String,
      required: true
    }
  }
}
</script>
