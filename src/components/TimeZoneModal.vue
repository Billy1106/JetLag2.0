
<template>
    <div>
        <div class="timezone-modal" :id="targetElement">
            <div id="timezone-date-year-container">
                <div id="timezone-date">
                    <input type="text" class="editable-field" id="timezone-month" v-model="timeBoxData.month" @input="handleTimeUpdateByUser" />
                    /
                    <input class="editable-field" id="timezone-day" v-model="timeBoxData.day" @input="handleTimeUpdateByUser" />
                </div>
                <input type="text" id="timezone-year" class="editable-field" v-model="timeBoxData.year"
                    @input="handleTimeUpdateByUser" />
            </div>
            <div id="timezone-time">
                <input type="text" class="editable-field" id="timezone-hour" v-model="timeBoxData.hour" @input="handleTimeUpdateByUser" />:
                <input type="text" class="editable-field" id="timezone-minutes" v-model="timeBoxData.minutes" @input="handleTimeUpdateByUser" />
            </div>
            <input id="timezone-name" class="editable-field" v-model="timeBoxData.timezone">
        </div>
        <component :is="Moveable" v-bind="moveable" @drag="handleDrag" />
    </div>
</template>
    
<script setup>
import { ref, watch, defineProps, computed } from 'vue'
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
const isUpdated = ref(false)
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
const timeBoxData = computed(() => {
    return formatDate()
})

const formatDate = () => {
    modal.value.day = modal.value.day.toString().padStart(2, '0').slice(-2)
    modal.value.month = modal.value.month.toString().padStart(2, '0').slice(-2)
    modal.value.hour = modal.value.hour.toString().padStart(2, '0').slice(-2)
    modal.value.minutes = modal.value.minutes.toString().padStart(2, '0').slice(-2)
    return modal.value
}

const handleTimeUpdateByUser = () => {
    if(!isUpdated.value) {
        isUpdated.value = true
        const newBaseTime = convertToBaseTime(modal.value, store.getters.getBaseTime)
        store.commit('setBaseTime', newBaseTime)
        store.commit('updateCurrentTimeInTimeBaseList')
    }
    isUpdated.value = false
}
const updateModal = () => {
    if(!isUpdated.value) {
        modal.value = {
            timezone: (store.getters.getTimeBoxList[props.index].time.timezone),
            month: (store.getters.getTimeBoxList[props.index].time.month),
            day: (store.getters.getTimeBoxList[props.index].time.day),
            year: (store.getters.getTimeBoxList[props.index].time.year),
            hour: (store.getters.getTimeBoxList[props.index].time.hour),
            minutes: (store.getters.getTimeBoxList[props.index].time.minutes),
            totalTime: store.getters.getTimeBoxList[props.index].time.totalTime
        }
    }
    isUpdated.value = false
}

const switchEditMode = () => {
    moveable.value.draggable = props.isEditable
}

const handleDrag = ({ target, transform }) => {
    target.style.transform = transform;
}
watch(() => store.getters.getTimeBoxList[props.index].time.totalTime, updateModal)
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
