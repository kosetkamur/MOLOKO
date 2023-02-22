import axios from 'axios';
const url = 'https://ooomlk.ru/api/cooperation.contacts.list';


export default class GetContacts {
    static async GetNumbers() {
        try{
            let data = await axios.get(url);
            return data.data.data;
        } catch (e) {
            console.log(e)
        }
    }
}