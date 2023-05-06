<template>
    <div class="hello-world">
        <h1>Output: {{ hello || 'Server not running!' }}</h1>
        <h3 v-if="visible" @click="visible = false">Click Me!</h3>
    </div>
</template >

<script lang="ts">
export default defineNuxtComponent({
    name: "Hello World",
    async setup(props, context) {
        const visible: Ref<boolean> = ref(true);
        let hello: Ref = ref(null);

        try {
            const { data } = await useFetch<Response>('http://localhost:4000/hello')
            if (data.value?.body) {
                hello = ref(data.value?.body);
            }
        } catch (error) {
            console.error(error)
        }

        return {
            visible,
            hello
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