
<template>
    <div class="dashboard bg" background="src/assets/background.png">
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

body {
    margin: 0 !important;
    padding: 0px;
}

.dashboard {
    background-color: $dashboard-background-color;
}

.bg {
    background-image: url("../assets/background.png");
    background-position: center;
    background-size: cover;
}
</style>
