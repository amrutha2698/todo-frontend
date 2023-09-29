import { BASE_URL } from "./base_url"
import { commonRequest } from "./commenHTTPReques"

// add -task API
export const addTask = async (body) => {
    return await commonRequest("POST", `${BASE_URL}/add_task`, body)
}

export const getAllTasks=async ()=>{
    return await commonRequest("GET", `${BASE_URL}/get_all_task`, "")
}

// Remove -task
export const removeTask=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/delete_task/${id}`,{})
}