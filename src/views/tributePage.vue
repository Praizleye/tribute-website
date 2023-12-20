<template>
    <div class="container">
        <div class="done-mess" v-show="messDone">
            <h6>
                tribute posted, thank you
            </h6>
        </div>
        <div class="err-mess" v-show="messErr">
            <h6>
                sorry, tribute unsuccessful
            </h6>
        </div>
        <div class="tributes">
            <triCard>
                
            </triCard>
        </div>
        <div class="form-wrapper">
            <transition name="fade">
                <form action="" v-show="isVisible">
                    <input type="text" name="writer-name" v-model="writerName" placeholder="Please Enter Your Name" id=""/>
                    <textarea name="tribute-text" id="" v-model="message" cols="30" row="6" placeholder="Please Enter Tribute"></textarea>
                    <button @click.prevent="submit" type="submit" >submit</button>
                </form>
            </transition>
            <button type="button" @click="isVisible = !isVisible" :class="{clicked: isVisible}" >
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
        color:var(--text-h);
        background-color: var(--color-border);
        border: 0.3rem solid transparent;
        transition: all 0.5s;
    }

    button[type = 'button']{
        padding:1.6rem;
        border:none;
        color:var(--text-h);
        background-color: var(--color-border);
        text-transform:capitalize;
        display:flex;
        align-items:center;
        flex-wrap:wrap;
        border-radius:var(--gap);
        margin:calc(var(--gap) / 4) 0 0 auto;
        gap:calc(var(--gap) / 5);
        border: 0.3rem solid transparent;
        transition: all 0.5s;
    }

    .fade-enter-active, .fade-leave-active{
        transition: all 0.25s;
    }

    .fade-enter, .fade-leave-to{
        transition: all 0.25s;
        opacity:0;
    }

    .clicked{
        color:var(--text-m) !important;
        border: 0.3rem solid var(--color-border) !important;
        background-color: var(--color-background) !important;
        transition: all 0.25s;
    }

    .done-mess, .err-mess{
        padding: var(--gap);
        color:var(--text-h);
        background-color: var(--color-border);
        border: 0.3rem solid transparent;
        transition: all 0.5s;
        text-align:center;
        text-transform:capitalize;
        width:100%;
        position:absolute;
        top:0;
        left:50%;
        transform:translateX(-50%);

    }
    .err-mess{
        background-color:#900 !important;
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
                messDone:'',
                messErr:'',
            }
        },
        methods:{
            async submit(){
                try{
                    const response = await axios.post('https://klutherthon316.onrender.com/api/tribute',{
                        fullname : this.writerName,
                        message : this.message
                    });

                    const status = response.status;
                    this.messDone = status >= 200 ? true : false;
                    this.messErr = status >= 400 ? true : false;
                    this.isVisible = !this.isVisible;
                    this.writerName = null;
                    this.message = null;
    
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