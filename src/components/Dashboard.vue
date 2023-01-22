
<template>
<div class="dashboard">
    <TimeZoneModals/>

</div>
</template>

<script>
import TimeZoneModals from './TimeZoneModals.vue'
export default {
    name:TimeZoneModals,
    components: {
    TimeZoneModals
  }
}
</script>

<style lang="scss">
@import 'src/assets/variables.scss';
.dashboard {
    min-width: 100vw;
    min-height: 100vh;
    background-color: $dashboard-background-color;
    background-size: cover;
}
</style>
  