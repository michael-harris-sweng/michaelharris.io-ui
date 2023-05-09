<template>
    <div class="hello-world">
        <h1>Output: {{ state.hello || 'All Quiet!' }}</h1>
        <button @click="greetServer">Refresh</button>
    </div>
</template >

<script lang="ts">
export default defineNuxtComponent({
    name: "Hello World",
    async setup(_props, _context) {
        const state = reactive({ hello: '' });

        const greetServer = async (): Promise<void> => {
            try {
                const { data } = await useFetch<Response>('http://localhost:4000/hello')
                if (data.value) {
                    state.hello = '' + data.value.body;
                }
            } catch (error) {
                console.error(error)
            }
        }

        return {
            state,
            greetServer,
        }
    },
})
</script>

<style lang="scss">
.hello-world {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;

    h3 {
        cursor: pointer;
    }
}
</style>