<template>
    <div class="input-field-wrapper" :class ="{'focused': isFocused }">
        <input type="text" placeholder="enter food like eba" @:focus='isFocused = true' @:blur='isFocused = false' v-model="input" />
        <InfoIcon class="icon"/>
    </div>
</template>

<script>
    import InfoIcon from './icons/IconInfo.vue'

    export default{
        data(){
            return{
                isFocused:false
            }
        },
        props:[
            'modelValue'
        ],
        computed:{
            input:{
                get(){
                    return this.modelValue;
                },
                set(value){
                    this.$emit('update:modelValue',value);
                    
                }
            }
        },
        components:{InfoIcon},
        methods:{

        }
    }
</script>
<style scoped>
    .input-field-wrapper{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        padding:0.8rem;
        background-color:unset;
        border:0.2rem solid var(--color-border);
        border-radius:0.2rem;
        transition:all 0.25s;
    }
    input{
        font-size:1.6rem;
        flex:1 0 auto;
        background-color:unset;
        border:none;
        caret-shape:block;
        caret-color:var(--primary-color);
        color:var(--dark-symbol);
    }

    input:focus{
        outline:none;
        border:none;
    }
    .icon{
        flex:0 0 fit-content;
    }

    .focused{
        border-color:var(--primary-color);
        transition:all 0.25s;
    }

</style>