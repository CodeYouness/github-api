<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        getCardList() {
            axios.get('https://api.github.com/search/repositories?q=' + this.store.searchedType)
                .then((response) => {
                    // handle success
                    console.log(response.data.data);
                    this.store.cardList = response.data.data
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        },
    }
}
</script>

<template>

</template>

<style scoped></style>