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
      <RouterLink to="/bio" class="tab" > <h6>Bio</h6></RouterLink>
      <RouterLink to="/tribute"  class="tab" ><h6>Tributes</h6></RouterLink>
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
        disPic:null,
        picInterval:null,
        bgInterval:null,
        disBg:null,
        themeCol:null,
        counterCol:null,
        i:0,
        n:0,
      }
    },
    beforeMount(){
      this.disPic = heroPic[this.i];
      this.disBg = heroBg[this.n].bgPic;
      this.themeCol = heroBg[this.n].priCol;
    },
    mounted(){
      let max = heroPic.length;
      this.picInterval = setInterval(()=>{
        this.i = this.i < max ? this.i + 1 : 0 ;
        this.disPic = heroPic[this.i];
      },45000);

      let max2 = heroBg.length;
      this.bgInterval = setInterval(()=>{
        this.n = this.n < max2 ? this.n + 1 : 0 ;
        this.disBg = heroBg[this.n].bgPic;
        this.themeCol = heroBg[this.n].priCol;
        this.counterCol = heroBg[this.n].opCol;
      },17500);
    
    },
   
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