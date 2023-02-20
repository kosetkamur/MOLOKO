import axios from 'axios';
const url = 'https://ooomlk.ru/api/cooperation.partners.list';


export default class GetPartner {
    static async GetImage() {
        try{
            let partners = await axios.get(url);
            return partners.data.data;
        } catch (e) {
            console.log(e)
        }
    }
}