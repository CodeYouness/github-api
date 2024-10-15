<script>
import { store } from "../store";
import MainSingleCardRepo from "./MainSingleCardRepo.vue";
import MainSingleCardUser from "./MainSingleCardUser.vue";
import MainLoader from "./MainLoader.vue";

export default {
    data() {
        return {
            store,
            isLoaded: false
        }
    },
    components: {
        MainSingleCardRepo,
        MainSingleCardUser,
        MainLoader
    },
    methods: {
        debug() {
            console.log(this.store.repoList)
        },
        loadingTime(){
            this.isLoaded = false;
            setTimeout( () => {
                this.isLoaded = true
            }, 3000)
        }
    },
    mounted() {
        this.loadingTime()
    },
    watch: {
        'store.repoList': function () {
            this.loadingTime();
        }
    }

}
</script>

<template>
    <main v-if="isLoaded">
        <div class="row" v-if="store.cardStyle">
            <h1>user</h1>
            <MainSingleCardUser v-for="(card, index) in this.store.repoList" :key="index" :card="card" />
        </div>
        <div class="row" v-else>
            <h1>repo</h1>
            <MainSingleCardRepo v-for="(card, index) in this.store.repoList" :key="index" :card="card" />
        </div>
    </main>
    <main v-else>
        <MainLoader/>
    </main>

</template>

<style scoped></style>