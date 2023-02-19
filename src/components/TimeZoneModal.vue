
<template>
    <div>
        <div class="timezone-modal" :id="targetElement">
            <div id="timezone-date-year-container">
                <div id="timezone-date">
                    <input type="number" min="1" max="12" class="editable-field" id="timezone-month" v-model="modal.month" @input="handleTimeUpdated" />/<input
                        type="number" class="editable-field" id="timezone-day" v-model="modal.day" @input="handleTimeUpdated" />
                </div>
                <input type="number" id="timezone-year" class="editable-field" v-model="modal.year"
                    @input="handleTimeUpdated" />
            </div>
            <div id="timezone-time">
                <input type="number" min="0" max="23" class="editable-field" id="timezone-hour" v-model="modal.hour" @input="handleTimeUpdated" />:
                <input type="number" min="0" max="59" class="editable-field" id="timezone-minutes" v-model="modal.minutes" @input="handleTimeUpdated" />
            </div>
            <input id="timezone-name" class="editable-field" v-model="modal.timezone">
        </div>
        <component :is="Moveable" v-bind="moveable" @drag="handleDrag" />
    </div>
</template>
    
<script setup>
import { ref, watch, defineProps } from 'vue'
import { initializeLocalTime, convertToBaseTime } from "../services/time/time-manager.js"
import { useStore } from "vuex"
import Moveable from 'vue3-moveable'

const props = defineProps({
    region: {
        default: ""
    },
    index: {
        default: 0
    },
    isEditable: {
        default: false
    }
})
const store = useStore()
const id = ref(props.index)
const targetElement = "draggable-area" + id.value
let moveable = ref({ target: ["#" + targetElement + ".timezone-modal"], draggable: false, origin: false, zoom: 0 })

const regionTime = initializeLocalTime(props.region, store.getters.getBaseTime)
let modal = ref({
    timezone: (regionTime.timezone),
    month: (regionTime.month),
    day: (regionTime.day),
    year: (regionTime.year),
    hour: (regionTime.hour),
    minutes: (regionTime.minutes),
    totalTime: regionTime.totalTime
})
const handleTimeUpdated = () => {
    const isAlreadyUpToDate = store.getters.getTimeBoxList[props.index].totalTime === modal.value.totalTime
    if (!isAlreadyUpToDate) {
        const newBaseTime = convertToBaseTime(modal.value, store.getters.getBaseTime)
        store.commit('setBaseTime', newBaseTime)
    }
}
const updateModal = () => {
    const newRegionTime = initializeLocalTime(props.region, store.getters.getBaseTime)
    store.commit('updateCurrentTimeInTimeBaseList', props.index)
    modal.value = {
        timezone: (newRegionTime.timezone),
        month: (newRegionTime.month),
        day: (newRegionTime.day),
        year: (newRegionTime.year),
        hour: (newRegionTime.hour),
        minutes: (newRegionTime.minutes),
        totalTime: newRegionTime.totalTime
    }
}

const switchEditMode = () => {
    moveable.value.draggable = props.isEditable
}

const handleDrag = ({ target, transform }) => {
    target.style.transform = transform;
}
watch(() => store.state.baseTime, updateModal)
watch(() => props.isEditable, switchEditMode)

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

.draggable-part {
    position: absolute;
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
    width: 40%;
    font-size: $font-size-medium-large;
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
    margin-left: 10px;
    width: 35%;
}

#timezone-date {
    font-size: $font-size-small;
    font-weight: $bold-weight;
    color: $font-color;
    width: 50%;
    display: flex;
    margin-left: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
}

#timezone-date>.editable-field {
    font-size: $font-size-medium-large;
    font-weight: $bold-weight;
    width: 40%;
}

#timezone-month {
    padding-left: 10px;
}
#timezone-name {
    font-size: $font-size-medium;
    font-weight: $bold-weight;
    width: 80%;
}
</style>
