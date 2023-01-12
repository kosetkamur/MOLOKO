import axios from 'axios';
const url = 'http://zinchi5d.beget.tech/api/news.list';

export default class GetData {
    static async getAll() {
        try{
            let getData = await axios.get(url);
            return getData.data;
        } catch (e) {
            console.log(e)
        }
    }
}
