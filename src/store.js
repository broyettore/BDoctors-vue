import { reactive } from "vue";

const store = reactive({
    
    apiBaseUrl: import.meta.env.VITE_BACKEND_API_URL,
    // apiDoctorsUrl: apiBaseUrl + "/doctors",
    query: "",
})

export default store;