<script>
import { store } from "../store";
import MainSingleCardRepo from "./MainSingleCardRepo.vue";

export default {
    data() {
        return {
            store
        }
    },
    components: {
        MainSingleCardRepo
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
    <div class="row" v-if="store.cardStyle">
        <MainSingleCardRepo v-for="(card, index) in this.store.repoList" :key="index" :card="card" />
    </div>
    <div class="row" v-else>
        <MainSingleCardRepo v-for="(card, index) in this.store.repoList" :key="index" :card="card" />
    </div>

</template>

<style scoped></style>