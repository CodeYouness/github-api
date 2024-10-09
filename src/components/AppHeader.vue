<script>
import { store } from "../store";

export default {
    data() {
        return {
            store
        }
    },
}
</script>

<template>

    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand position-absolute">GitHub API</a>
            <form class="d-flex me-auto ms-auto" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>

</template>

<style scoped></style>