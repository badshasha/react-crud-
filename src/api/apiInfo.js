
import axios from "axios";

export const full = "https://localhost:7255/";

export const controllers = {
    Blogger : "Blogger"
}

const crud_opration = {
    get : "getAll",
    getFromId : "getFromid/",
    create : "CreateBlogger",
    delete : "DeleteBlogger/"
}

export const CRUD = (controller) => {
    const fullUrl = full + 'api/' + controller + '/';
    return {
        fetch :() => axios.get(fullUrl + crud_opration.get),
        fetchId : (id) => axios.get(fullUrl + crud_opration.getFromId + id),
        create : (newRecord) => axios.post( fullUrl + crud_opration.create , newRecord ),
        delete : (id) => axios.delete(fullUrl + crud_opration.delete + id),
    }
}
