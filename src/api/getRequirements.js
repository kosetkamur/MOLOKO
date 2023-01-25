import axios from 'axios';
const url = 'http://zinchi5d.beget.tech/api/cooperation.requirements.list';


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