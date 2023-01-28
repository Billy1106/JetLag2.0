
<template>
    <div class="timezone-modal">
        <div id="timezone-date-year-container">
            <input id="timezone-date" class="editable-field" v-model="date" />
            <input id="timezone-year" class="editable-field" v-model="year" />
        </div>
        <input id="timezone-time" class="editable-field" v-model="time" />
        <input id="timezone-name" class="editable-field" v-model="timezone" />
    </div>
</template>
    
<script>
import { ref } from 'vue'
import {initializeLocalTime} from "../services/time/time-manager.js"
import {useStore} from "vuex"
export default {
    props: ['region'],
    setup(props) {
        const store = useStore()
        const regionTime = initializeLocalTime(props.region,store.getters.getBaseTime)
        const timezone = ref(regionTime.timezone)
        const date = ref(regionTime.date)
        const year = ref(regionTime.year)
        const time = ref(regionTime.time);

        return { date, year, time, timezone }
    }
}
</script>
    
<style lang="scss">
@import 'src/assets/variables.scss';

.timezone-modal {
    width: $timezone-width;
    height: $timezone-height;
    background-color: $timezone-background-color;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: $timezone-radius;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .5);
}

.timezone-modal input {
    background: transparent;
    border: none;
    outline: 0;
    color: $font-color;
    font-family: $body-font-family;
    text-align: center;
}

#timezone-date-year-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#timezone-date-year-container>.editable-field {
    width: 50%;
    font-size: $font-size-medium;
    font-weight: $bold-weight;
}

#timezone-time {
    font-size: $font-size-large;
    font-weight: $bold-weight;
    width: 100%;
}

#timezone-name {
    font-size: $font-size-small;
    font-weight: $bold-weight;
    width: 100%;
}
</style>
