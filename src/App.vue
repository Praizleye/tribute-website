<template>
  <header>
    <div 
      class="hero-bg"
      :style="{backgroundImage:`url(${disBg})` }"
    >
      <div class="overlay">
        <div class="header-content">
          <div 
            :style="{backgroundImage:`url(${disPic})` }"
            alt="" 
            class="hero-pic"
          ></div>
          <div class="hero-header">
            <p class="first">
              remembering
            </p>
            <h2>
              comfort 
              <p class="name">
                faderera alake aberuagba
              </p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main>
    <div class="links">
      <RouterLink to="/bio" class="tab" >Bio</RouterLink>
      <RouterLink to="/tribute"  class="tab" >Tributes</RouterLink>
    </div>
    <RouterView></RouterView>
  </main>
</template>
<script>
  import {RouterLink,RouterView} from 'vue-router';
  import {heroBg, heroPic} from './assets/imgData.js';
  export default {
    
    data:()=>{
      return{
        i:0,
        n:0,
        disPic:heroPic[this.i],
        picInterval:null,
        bgInterval:null,
        disBg:heroBg[this.n].bgPic,
        themeCol:heroBg[this.n].priCol,
        counterCol:null,
      }
    },
    mounted(){
      
      setInterval(()=>{
        changeImg();
      },7000);

      setInterval(()=>{
        changeBg();
      },8000);
    
    },
    methods:{
      changeImg(){
        const max = heroPic.length;
        this.i = this.i < max ? this.i + 1 : 0 ;
        this.disPic = heroPic[this.i];
      },

      changeBg(){
        const max = heroBg.length;
        this.n = this.n < max2 ? this.n + 1 : 0 ;
        this.disBg = heroBg[this.n].bgPic;
        this.themeCol = heroBg[this.n].priCol;
        this.counterCol = heroBg[this.n].opCol;
      },
    }
   
  }
</script>
<style scoped>
  header, main{
    flex:0 0 100%;
  }
  .container:only-child{
    flex:0 0 100%;
  }
  
  .tab{
    flex: 0 0 fit-content;
    padding:0.8rem 1.6rem;
  }

</style>