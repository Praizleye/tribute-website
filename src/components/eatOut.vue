<template>
    <div class="steps-wrapper">
        <p class="small-header">
            support videos
        </p>
        <p class="closest-vendor"></p>
        <div id="map">{{ map }}</div>
    </div>
</template>

<script>
    export default {
        props:[
        'map'
        ]
    }
</script>

<style scoped>
    .small-header{
        font-size:1.4rem;
        font-weight:500;
        text-transform:uppercase;
    }
    .steps-wrapper{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        gap:0.8rem;
    }
</style>