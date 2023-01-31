
<template>
    <div class="timezone-modal">
        <div id="timezone-date-year-container">
            <div id="timezone-date">
                <input id="timezone-hour" class="editable-field" v-model="modal.month" @input="handleTimeUpdated" />/<input id="timezone-minutes"
                    class="editable-field" v-model="modal.day" @input="handleTimeUpdated" />
            </div>
            <input id="timezone-year" class="editable-field" v-model="modal.year" @input="handleTimeUpdated" />
        </div>
        <div id="timezone-time">
            <input id="timezone-hour" class="editable-field" v-model="modal.hour" @input="handleTimeUpdated" />:<input
                id="timezone-minutes" class="editable-field" v-model="modal.minutes" @input="handleTimeUpdated" />
        </div>
        <input id="timezone-name" class="editable-field" v-model="modal.timezone" >
    </div>
</template>
    
<script>
import { ref, watch } from 'vue'
import { initializeLocalTime, convertToBaseTime } from "../services/time/time-manager.js"
import { useStore } from "vuex"
export default {
    props: ['region', 'index'],
    setup(props) {
        const store = useStore()
        const regionTime = initializeLocalTime(props.region, store.getters.getBaseTime)
        let modal = ref({
            timezone: (regionTime.timezone),
            month: (regionTime.month),
            day: (regionTime.day),
            year: (regionTime.year),
            hour: (regionTime.hour),
            minutes: (regionTime.minutes),
            time: regionTime.time
        })
        const handleTimeUpdated = () => {
            const isAlreadyUpToDate = store.getters.getTimeBoxList[props.index].time === modal.value.time
            if (!isAlreadyUpToDate) {
                const newBaseTime = convertToBaseTime(modal.value, store.getters.getBaseTime)
                store.commit('setBaseTime', newBaseTime)
            }
        }
        const updateModal = () =>{
            const newRegionTime = initializeLocalTime(props.region, store.getters.getBaseTime)
            store.commit('updateCurrentTimeInTimeBaseList', props.index)
            modal.value = {
                timezone: (newRegionTime.timezone),
                month: (newRegionTime.month),
                day: (newRegionTime.day),
                year: (newRegionTime.year),
                hour: (newRegionTime.hour),
                minutes: (newRegionTime.minutes),
                time: newRegionTime.time
            }
            // return modal
        }
        
        watch(() => store.state.baseTime,updateModal)//check why updateModal needs to be callback function

        return { modal, handleTimeUpdated }
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
