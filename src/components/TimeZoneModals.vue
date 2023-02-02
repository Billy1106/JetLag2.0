<template>
    <div class="region-modal-container">
        <div v-for="modal in modals" :key="modal">
            <TimeZoneModal :region="modal.region" :index="modal.index" :isEditable="editable" />
        </div>
    </div>
    <div class="input-form">
        <form class="add-region" @submit.prevent="handleAddRegion">
            <button :disabled="editable">Add</button>
            <input type="text" v-model="regionName" class="add-button" placeholder="region" :disabled="editable" />
        </form>
        <div class="editable-button">
            <button type="button" id="edit-button" @click="handleEditButton">{{
                editable?'Add mode': 'Edit mode'
            }}</button>
        </div>
    </div>
</template>

<script>
import TimeZoneModal from './TimeZoneModal.vue'
import { ref } from 'vue'
import { findTimeZone, getTimezoneByDate, initializeLocalTime } from "../services/time/time-manager.js"
import { useStore } from "vuex"
export default {
    name: TimeZoneModal,
    setup() {
        const store = useStore()
        const regionName = ref('')
        const localTimezone = getTimezoneByDate(store.getters.getBaseTime)
        const initialModal = { index: 0, region: localTimezone, time: initializeLocalTime(localTimezone, store.getters.getBaseTime) };
        const modals = ref([initialModal])//store timezone name e.g Asia/Tokyo
        store.commit('addTimeBox', initialModal)

        let editable = ref(false);

        const handleAddRegion = () => {
            const newTimezone = findTimeZone(regionName.value)
            if (newTimezone === null) {
                alert('Invalid region')
            } else {
                const newModal = { index: modals.value.length, region: newTimezone, time: initializeLocalTime(newTimezone, store.getters.getBaseTime) }
                modals.value.push(newModal)
                store.commit('addTimeBox', newModal)
            }
        }

        const handleEditButton = () => {
            editable.value = !editable.value
        }

        return { handleAddRegion, regionName, modals, handleEditButton, editable }
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

.input-form {
    text-align: center;
    vertical-align: bottom;
    margin-left: 10%;
    margin-right: 10%;
}

.add-region {
    text-align: center;
    vertical-align: bottom;
}

.editable-button {
    margin-top: 10%;
    text-align: center;
}

.add-button {
    border: none;
    border-bottom: solid white 1px;
    outline: 0;
}

button {
    background: transparent;
    border: none;
    color: $font-color;
    size: $font-size-large;
    font-weight: $light-weight;
    font-family: $body-font-family;
    transition: 0.3s
}

button:hover {
    opacity: 0.5;
}

.timezone-modal {
    margin: $timezone-margin;
}

.moveable {
    border: none;
    position: absolute;
}

::placeholder {
    color: $font-color;
    opacity: 0.4;
}
</style>
