
<template>
<div class="dashboard">
    <div class="country-modal-container">
        <TimeZoneModal class="time-zone-modal"/>
        <TimeZoneModal class="time-zone-modal"/>
    </div>
    <form class="add-country">
        <button>Add</button>
        <input class="add-button" type="text"/>
    </form>

</div>
</template>

<script>
import TimeZoneModal from './TimeZoneModal.vue'
export default {
    name:TimeZoneModal,
    setup(){
        return   
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
</style>
  