import axios from 'axios';
const url = 'http://zinchi5d.beget.tech/api/goods.list';


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