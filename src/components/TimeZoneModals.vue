<template>
        <div class="region-modal-container">
            <div v-for="modal in modals" :key="modal.index">
                <TimeZoneModal :region="modal.region" :index="modal.index" class="time-zone-modal" />
            </div>
        </div>
        <form class="add-region" @submit.prevent="handleAddRegion">
            <button>Add</button>
            <input type="text" v-model="regionName" class="add-button" placeholder="region Code" />
        </form>
</template>

<script>
import TimeZoneModal from './TimeZoneModal.vue'
import { ref } from 'vue'
import {findTimeZone, getTimezoneByDate, initializeLocalTime} from "../services/time/time-manager.js"
import { useStore } from "vuex"
export default {
    name: TimeZoneModal,
    setup() {
        const store = useStore()
        const regionName = ref('')
        const localTimezone = getTimezoneByDate(store.getters.getBaseTime)
        const initialModal = { index: 0, region: localTimezone, time:initializeLocalTime(localTimezone, store.getters.getBaseTime)};
        const modals = ref([initialModal])//store timezone name e.g Asia/Tokyo
        store.commit('addTimeBox',initialModal)
        const handleAddRegion = () => {
            const newTimezone = findTimeZone(regionName.value)
            if(newTimezone === null){
                alert('Invalid region')
            }else {
                const newModal = { index: modals.value.length - 1, region: newTimezone, time:initializeLocalTime(newTimezone, store.getters.getBaseTime) }
                modals.value.push(newModal)
                store.commit('addTimeBox',newModal)
            }
        }
        return { handleAddRegion, regionName, modals }
    },
    components: {
        TimeZoneModal
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

.region-modal-container {
    min-width: 100vw;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.add-region {
    text-align: center;
    vertical-align: bottom;
}

.add-button {
    background: transparent;
    border: none;
    border-bottom: solid white 1px;
    outline: 0;
    font-weight: $bold-weight;
    font-family: $body-font-family;
    color: $font-color;
}

button {
    background: transparent;
    border: none;
    color: $font-color;
    size: $font-size-medium;
    font-weight: $bold-weight;
    font-family: $body-font-family;
}

.time-zone-modal {
    margin: $timezone-margin;
}

::placeholder {
    color: $font-color;
    opacity: 0.4;
}
</style>
