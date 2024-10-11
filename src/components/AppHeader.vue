<script>
import { store } from "../store";
import axios from "axios";

export default {
    data() {
        return {
            store,
            lengthQuery: false,
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

            if (this.store.searchedQuery.trim().length >= 3) {
                this.lengthQuery = false;
                console.log('lunghezza okay')
                axios.get(`https://api.github.com/search/${this.store.searchedType}`, config)
                    .then((response) => {
                        console.log(response.data.items);
                        this.store.repoList = response.data.items;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } else {
                this.lengthQuery = true;
                console.log('corto')
            }
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
        <div class="container-fluid position-relative">
            <a class="navbar-brand position-absolute">GitHub API</a>
            <div class="d-flex flex-column me-auto ms-auto">
                <form class="d-flex" role="search" @submit="handleSubmit">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                        v-model="store.searchedQuery">
                    <select class="form-select me-2" v-model="store.searchedType">
                        <option value="" disabled>Select</option>
                        <option value="users">Users</option>
                        <option value="repositories">Repositories</option>
                    </select>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                <div v-if="lengthQuery" class="text-danger border-bottom border-danger position-absolute positioning">
                    <p class="text-danger m-0">Search string must be al least 3 characters</p>
                </div>
            </div>
        </div>
    </nav>

</template>

<style scoped>
.positioning {
    top: 110%;
}
</style>