<template>
    <label for="button">
        <input type='radio' name="button"/> 
        <slot></slot>   
    </label>
</template>

<style scoped>
    label{
        display:flex;
        align-items:center;
        gap:0.4rem;
        max-width:fit-content;
        padding:0.6rem;
    }
    input[type='radio']:checked{
        accent-color:var(--primary-color);
        border-color:var(--disable);
    }
</style>