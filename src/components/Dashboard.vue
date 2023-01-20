
<template>
<div class="dashboard">
    <div class="country-modal-container">
        <div v-for="modal in modals" :key="modal.index">
            <TimeZoneModal :country="modal.country" class="time-zone-modal"/>
        </div>
    </div>
    <form class="add-country" @submit.prevent="handleAddCountry">
        <button>Add</button>
        <input type="text" v-model="countryName" class="add-button" placeholder="Country Code" />
    </form>

</div>
</template>

<script>
import TimeZoneModal from './TimeZoneModal.vue'
import {ref} from 'vue'
export default {
    name:TimeZoneModal,
    setup(){
        const countryName = ref('')
        const modals = ref([{index:0,country:"JP"},{index:1,country:"CN"}])
        const handleAddCountry = () => {
            modals.value.push({index:modals.value.length-1,country:countryName.value})
        }
        return {handleAddCountry,countryName,modals}
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
.country-modal-container {
    min-width: 100vw;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.add-country{
        text-align: center;     
        vertical-align: bottom;
}
.add-button {
    background: transparent;
    border:none;
    border-bottom: solid white 1px;
    outline: 0;
    font-weight:$bold-weight;
    font-family: $body-font-family;
    color: $font-color;  
}
button{
    background: transparent;
    border:none;
    color: $font-color;  
    size:$font-size-medium;
    font-weight:$bold-weight;
    font-family: $body-font-family;
}
.time-zone-modal{
    margin:$timezone-margin;
}
::placeholder {
    color: $font-color; 
    opacity:0.4;
  }
</style>
  