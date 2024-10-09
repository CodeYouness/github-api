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
    }

}
</script>

<template>
    <div class="row">
        <MainSingleCard />
    </div>

</template>

<style scoped></style>