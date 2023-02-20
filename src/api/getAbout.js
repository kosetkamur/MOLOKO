import axios from 'axios';
const url = 'https://ooomlk.ru/api/core.about';


export default class GetAbout {
    static async GetContent() {
        try{
            let data = await axios.get(url);
            return data.data.data;
        } catch (e) {
            console.log(e)
        }
    }
}