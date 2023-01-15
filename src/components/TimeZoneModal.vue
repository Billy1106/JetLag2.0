
<template>
    <div class="timezone-modal">
        <div id="timezone-date-year-container">
            <input id="timezone-date" class="editable-field" value="4/21"/>
            <input id="timezone-year" class="editable-field" value="2023"/>
        </div>
        <input id="timezone-time" class="editable-field" value="21:30"/>
        <input id="timezone-name" class="editable-field" value="Japan,Tokyo"/>
    </div>
</template>
    
<script>
export default {
    setup() {
        return
    }
}
</script>
    
<style lang="scss">
@import 'src/assets/variables.scss';
.timezone-modal{
    width: $timezone-width;
    height: $timezone-height;
    background-color: $timezone-background-color;
    border:none;
    display:flex;
    flex-direction: column;
    align-items: center;
    border-radius: $timezone-radius;
}
.timezone-modal input  {
    background: transparent;
    border:none;
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
#timezone-date-year-container > .editable-field {
    width: 50%;
    font-size: $font-size-medium;
    font-weight:$bold-weight;
}
#timezone-time {
    font-size: $font-size-large;
    font-weight:$bold-weight;
    width:100%;
}
#timezone-name {
    font-size: $font-size-small;
    font-weight:$bold-weight;
    width:100%;
}

</style>
