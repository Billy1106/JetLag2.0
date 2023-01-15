
<template>
<div class="dashboard">
    <div class="country-modal-container">
    </div>
    <form class="add-country">
        <button>Add</button>
        <input type="text"/>
    </form>

</div>
</template>

<script>
export default {
    setup(){
        return   
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
}
.add-country{
        text-align: center;     
        vertical-align: bottom;
}
input{
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
</style>
  