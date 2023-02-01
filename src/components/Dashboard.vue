
<template>
    <div class="dashboard bg" background="src/assets/background.png" >
        <TimeZoneModals />

    </div>
</template>

<script>
import TimeZoneModals from './TimeZoneModals.vue'
export default {
    name: TimeZoneModals,
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

.bg {
    background-image: url("../assets/background-opacity-20.png");
    background-position: center;
    background-size: cover;
  }
</style>
