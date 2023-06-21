import { reactive } from "vue";

const store = reactive({

    apiBaseUrl: import.meta.env.VITE_BACKEND_API_URL,
    // apiDoctorsUrl: apiBaseUrl + "/doctors",
    query: "",
    testApi: "http://127.0.0.1:8000/storage/",
})

export default store;