<script>
import { Icon, addIcon } from '@iconify/vue'
import fluent from '@iconify/icons-fluent/fluent-32-filled'
import speaker24Filled from '@iconify/icons-fluent/speaker-24-filled'
import speakerOff24Filled from '@iconify/icons-fluent/speaker-off-24-filled'

addIcon('fluent', fluent)
addIcon('speakerOn', speaker24Filled)
addIcon('speakerOff', speakerOff24Filled)

// Test component
export default Icon
</script>
