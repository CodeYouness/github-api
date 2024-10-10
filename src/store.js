import { reactive } from "vue";

export const store = reactive({
    repoList: [],
    cardStyle: true,
    searchedType: '',
    searchedQuery: ''
});
