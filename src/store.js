import { reactive } from "vue";

const store = reactive({

    apiBaseUrl: import.meta.env.VITE_BACKEND_API_URL,
    query: "",
    suggestions: [],
    results: [],
    testApi: "http://127.0.0.1:8000/storage/",
    showSuggestions: false,

    // vote average function
    votesAverage(votes) {
        let sum = 0;

        for (let i = 0; i < votes.length; i++) {
            sum += votes[i].value;
        }
        const avg = sum / votes.length;

        return Math.floor(avg);
    },
})



export default store;