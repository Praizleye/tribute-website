<template>
    <div class="result-wrapper">
        <div class="ingredient-list">
            <p class="small-header">
                ingredients
            </p>
            <ul class="main-list" >
                <li v-for="(ingre, i ) in ingre" :key="i">{{ ingre }}</li>
            </ul>
        </div>
        <div class="steps-wrapper">
            <p class="small-header">
                steps
            </p>
            <p class="main-step">
                {{ steps }}
            </p>
        </div>
        <div class="steps-wrapper">
            <p class="small-header">
                support videos
            </p>
            <SupportVideo v-for="(name, i) in foodTruck">{{ name }}</SupportVideo>
        </div>
    </div>
</template>

<script>
    import SupportVideo from './videoComp.vue'

    export default{
        components:{SupportVideo},
        props:['ingre','steps', 'foodName', 'foodTruck'],
        
    }
</script>

<style scoped>
    .result-wrapper{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        gap:1.6rem;
    }
    .ingredient-list, .steps-wrapper{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        gap:0.8rem;
    }
    .small-header{
        font-size:1.4rem;
        font-weight:500;
        text-transform:uppercase;
        width:100%;
    }
    .steps-wrapper iframe{
        width:100%;
    }
</style>