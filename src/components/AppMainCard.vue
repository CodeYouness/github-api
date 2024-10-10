<script>
import { store } from "../store";
import MainSingleCardRepo from "./MainSingleCardRepo.vue";
import MainSingleCardUser from "./MainSingleCardUser.vue"

export default {
    data() {
        return {
            store
        }
    },
    components: {
        MainSingleCardRepo,
        MainSingleCardUser
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
        <h1>user</h1>
        <MainSingleCardUser v-for="(card, index) in this.store.repoList" :key="index" :card="card" />
    </div>
    <div class="row" v-else>
        <h1>repo</h1>
        <MainSingleCardRepo v-for="(card, index) in this.store.repoList" :key="index" :card="card" />
    </div>

</template>

<style scoped></style>