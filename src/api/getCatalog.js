import axios from 'axios';
const url = 'https://ooomlk.ru/api/goods.list';


export default class GetCatalog {
    static async GetItems() {
        try{
            let data = await axios.get(url);
            return data.data.data;
        } catch (e) {
            console.log(e)
        }
    }
}