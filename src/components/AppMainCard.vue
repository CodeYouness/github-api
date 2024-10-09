<script>
import { store } from "../store";
import MainSingleCard from "./MainSingleCard.vue";

export default {
    data() {
        return {
            store
        }
    },
    components: {
        MainSingleCard
    },
    // methods: {
    //     debug() {
    //         console.log(this.store.repoList)
    //     }
    // },
    // created() {
    //     this.debug()
    // }

}
</script>

<template>
    <div class="row">
        <MainSingleCard v-for="(card, index) in this.store.repoList" :key="index" :card="card" />
    </div>

</template>

<style scoped></style>