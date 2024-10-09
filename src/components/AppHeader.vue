<script>
import { store } from "../store";
import axios from "axios";

export default {
    data() {
        return {
            store,
            searchQuery: ""
        }
    },
    methods: {
        getCardList() {

            this.store.searchedType = this.searchQuery;

            axios.get('https://api.github.com/search/repositories?q=' + this.store.searchedType)
                .then((response) => {
                    // handle success
                    console.log(response.data.items);
                    this.store.repoList = response.data.items
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        },

        handleSubmit(event) {
            event.preventDefault();
            this.getCardList();
        }
    }
}
</script>

<template>

    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand position-absolute">GitHub API</a>
            <form class="d-flex me-auto ms-auto" role="search" @submit="handleSubmit">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                    v-model="searchQuery">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>

</template>

<style scoped></style>