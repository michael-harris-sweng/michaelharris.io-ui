<template>
    <div class="hello-world">
        <h1>Hello World!</h1>
        <h3 v-if="visible" @click="visible = false">Click Me!</h3>
    </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
    name: "Hello World",
    setup(props, context) {
        const visible: Ref<boolean> = ref(true);

        return {
            visible,
        }
    },
})
</script>

<style lang="scss">
.hello-world {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h3 {
        cursor: pointer;
    }
}
</style>