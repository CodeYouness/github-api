<script>
import { store } from "../store";
import axios from "axios";

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        getCardList() {
            if (this.store.searchedType === "users") {
                this.store.cardStyle = true;
            } else {
                this.store.cardStyle = false;
            }

            const config = {
                params: {
                    q: this.store.searchedQuery,
                },
                headers: {
                    "Authorization": `Bearer ${window.config.token}`,
                    "X-GitHub-Api-Version": "2022-11-28",
                }
            };

            axios.get(`https://api.github.com/search/${this.store.searchedType}`, config)
                .then((response) => {
                    console.log(response.data.items);
                    this.store.repoList = response.data.items;
                })
                .catch((error) => {
                    console.log(error);
                });
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
                    v-model="store.searchedQuery">
                <select class="form-select" v-model="store.searchedType">
                    <option value="" disabled>Select</option>
                    <option value="users">Users</option>
                    <option value="repositories">Repositories</option>
                </select>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>

</template>

<style scoped></style>