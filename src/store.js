import { reactive } from "vue";

const store = reactive({

    apiBaseUrl: import.meta.env.VITE_BACKEND_API_URL,
    // apiDoctorsUrl: apiBaseUrl + "/doctors",
    query: "",
    suggestions: [],
    results: [],
    testApi: "http://127.0.0.1:8000/storage/",
    showSuggestions: false,
})



export default store;