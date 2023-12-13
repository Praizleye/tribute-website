<template>
    <div class="container">
        <div class="tributes">
            <triCard>
                
            </triCard>
        </div>
        <div class="form-wrapper">
            <form action="" v-show="isVisible">
                <input type="text" name="writer-name" v-model="writerName" placeholder="Please Enter Your Name" id=""/>
                <textarea name="tribute-text" id="" v-model="message" cols="30" row="6" placeholder="Please Enter Tribute"></textarea>
                <button @submit.prevent="submit" type="submit">submit</button>
            </form>
            <button type="button" @click="isVisible = !isVisible" >
                <span class="title">
                    write tribute
                </span>
                <span class="material-symbols-outlined">
                    edit_square
                </span>
            </button>
        </div>
    </div>
</template>
<style scoped>
    .container{
        min-height:50vh;
        height:fit-content;
        padding:var(--gap);
    }
    .form-wrapper{
        position:fixed;
        right:var(--gap);
        bottom:var(--gap);
        max-height:100%;
    }
    .form-wrapper form{
        display:flex;
        flex-wrap:wrap;
        flex-direction:column;
        gap: calc( var(--gap) / 4 );
    }

    form input, form textarea{
        padding:calc( var(--gap) / 4 );
        width:100%;
    }

    button[type = 'submit']{
        padding:0.8rem 1.6rem;
        text-transform:uppercase;
    }

    button[type = 'button']{
        padding:0.8rem;
        text-transform:capitalize;
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        border-radius:var(--gap);
        margin:calc(var(--gap) / 4) 0 0 auto;
    }

    @media only screen and (max-width:576px){
        button[type = 'button']  .title{
            display:none;
        }
        .form-wrapper{
            max-width: calc( 100% - calc(var(--gap) * 2));
        }
    }

</style>
<script>
    import triCard from '../components/triCard.vue';
    import axios from 'axios';

    export default{
        data: ()=>{
            return{
                isVisible:false,
                writerName:null,
                message:null,
                tributes:null,
            }
        },
        methods:{
            async submit(){
                try{
                    const response = await axios.post('',{
                        name : this.writerName,
                        message : this.message
                    })
                }catch(err){
                    console.error(err);
                }
            }
        },
        components:{
            triCard
        },
        beforeMount:{
            // ()=>{
            //     try{
            //         const response = await axios.get('');
            //         this.tributes = response.data;
            //     }catch(err){
            //         console.error(err);
            //     }
            // }
        }
    }
</script>