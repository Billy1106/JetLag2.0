
<template>
    <div class="timezone-modal">
        <div id="timezone-date-year-container">
            <div id="timezone-date">
                <input id="timezone-hour" class="editable-field" v-model="month" />/<input id="timezone-minutes" class="editable-field" v-model="day" />
            </div>
            <input id="timezone-year" class="editable-field" v-model="year" />
        </div>
        <div id="timezone-time">
            <input id="timezone-hour" class="editable-field" v-model="hour" />:<input id="timezone-minutes" class="editable-field" v-model="minutes" />
        </div>
        <input id="timezone-name" class="editable-field" v-model="timezone" />
    </div>
</template>
    
<script>
import { ref } from 'vue'
import { initializeLocalTime } from "../services/time/time-manager.js"
import { useStore } from "vuex"
export default {
    props: ['region'],
    setup(props) {
        const store = useStore()
        const regionTime = initializeLocalTime(props.region, store.getters.getBaseTime)
        const timezone = ref(regionTime.timezone)
        const month = ref(regionTime.month)
        const day = ref(regionTime.day)
        const year = ref(regionTime.year)
        const hour = ref(regionTime.hour);
        const minutes = ref(regionTime.minutes)
        // watch([hour, minutes], ([newHour, newMinutes], [prevHours, prevMinutes]) => {
        //     const baseTime = store.getters.getBaseTime
        //     if(newHour !== prevHours) {
        //         convertToBaseTime(regionTime,baseTime)
        //     }
        //     if(newMinutes !== prevMinutes) {
        //         baseTime.setMinutes(parseInt(newMinutes))
        //         store.commit("setBaseTime",baseTime)
        //     }
        // })

        return { date, year, timezone, hour, minutes, month, day }
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

input {
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
    color: $font-color;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
}

#timezone-time>.editable-field {
    font-size: $font-size-large;
    font-weight: $bold-weight;
    width: 30%;
}

#timezone-date {
    font-size: $font-size-small;
    font-weight: $bold-weight;
    color: $font-color;
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
}

#timezone-date>.editable-field {
    font-size: $font-size-medium;
    font-weight: $bold-weight;
    width: 30%;
}

#timezone-name {
    font-size: $font-size-small;
    font-weight: $bold-weight;
    width: 100%;
}
</style>
