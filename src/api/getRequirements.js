import axios from 'axios';
const url = 'https://ooomlk.ru/api/cooperation.requirements.list';


export default class GetRequirements{
    static async GetRequirement() {
        try{
            let data = await axios.get(url);
            return data.data.data;
        } catch (e) {
            console.log(e)
        }
    }
}