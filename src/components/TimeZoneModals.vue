<template>
        <div class="region-modal-container">
            <div v-for="modal in modals" :key="modal.index">
                <TimeZoneModal :region="modal.region" class="time-zone-modal" />
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
import {findTimeZone, getTimezoneByDate} from "../services/time/time-manager.js"
import { useStore } from "vuex"
export default {
    name: TimeZoneModal,
    setup() {
        const store = useStore()
        const regionName = ref('')
        const modals = ref([{ index: 0, region: getTimezoneByDate(store.getters.getBaseTime)}])
        const handleAddRegion = () => {
            if(findTimeZone(regionName.value) === null){
                alert('Invalid region')
            }else {
                modals.value.push({ index: modals.value.length - 1, region: findTimeZone(regionName.value) })
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
