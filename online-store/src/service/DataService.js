import axios from "axios";



class DataService {
    async getProducts(){
        //if need to start the front end without the back-end, uncomment the below comment:
        //return catalog;

        let response = await axios.get("http://127.0.0.1:8000/api/products");
        return response.data;
    }
}

export default DataService;