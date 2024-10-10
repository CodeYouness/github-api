<script>
export default {
    data() {
        return {
        }
    },
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>


    <div class="col-5th my-3">
        <section class="card">
            <div class="card-body">
                <h5 class="card-title">{{ card.name }}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's
                    content.</p>
                <a :href="card.clone_url" rel="noopener noreferrer" target="_blank" class="card-link">Card link</a>
            </div>

        </section>
    </div>
</template>

<style scoped>
.col-5th {
    flex: 0 0 20%;
    max-width: 20%;
}
</style>