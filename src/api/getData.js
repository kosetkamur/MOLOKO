import axios from 'axios';
const urlNews = 'http://zinchi5d.beget.tech/api/news.list';

export default class GetData {
    static async getNews() {
        try{
            let getData = await axios.get(urlNews);
            return getData.data.data;
        } catch (e) {
            console.log(e)
        }
    }
}


