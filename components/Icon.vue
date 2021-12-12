<script>
import { Icon, addIcon } from '@iconify/vue/dist/offline'
import fluent from '@iconify/icons-fluent/fluent-32-filled'
import play from '@iconify/icons-fluent/play-12-filled'
import pause from '@iconify/icons-fluent/pause-12-filled'

// Assign icon data to name "bell" used in first example
addIcon('fluent', fluent)
addIcon('play', play)
addIcon('pause', pause)

// Test component
export default Icon
</script>
