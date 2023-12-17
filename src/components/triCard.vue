<template>
    <div class="card-container">
        <h6 class="w-name">
            <em>
                <slot name="w-name" />
            </em>
        </h6>
        <p class="tribute">
            <slot name="message" />
        </p>
    </div>
</template>
<style scoped>
.card-container {
    padding: 0 var(--gap);
}

.w-name {
    color: var(--text-h);
    text-transform: capitalize;
    display: block;
}

.tribute {
    color: var(--text-m);
    display: block;
}
</style>