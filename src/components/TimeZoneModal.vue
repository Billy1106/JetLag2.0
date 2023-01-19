
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
import * as ct from "countries-and-timezones";
export default {
    setup() {

        const getInitialTime = () => {
            const getInitialTimeZone = ct.getTimezone(ct.getCountry('JP').timezones[0]).utcOffset
            const utc = new Date().toUTCString();
            const gDate = new Date(utc.replace('GMT', ''));
            const hours = gDate.getHours();
            gDate.setHours(hours + getInitialTimeZone / 60);
            return gDate.toString();
        }
   
        const timezone = ref(ct.getCountry('JP').timezones[0])
        const currentDate = new Date(getInitialTime())
        const date = ref(String(currentDate.getMonth() + 1).padStart(2, '0') + "/" + String(currentDate.getDate()).padStart(2, '0'))
        const year = ref(currentDate.getFullYear())
        const localTime = currentDate.toLocaleTimeString();
        const time = ref(localTime.substring(0, localTime.length - 3));

        return { date, year, time, timezone }
    },
    mounted() {

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
