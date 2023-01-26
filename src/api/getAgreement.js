import axios from 'axios';
const url = 'http://zinchi5d.beget.tech/api/core.agreement';


export default class GetAgreement {
    static async GetFile() {
        try{
            let data = await axios.get(url);
            return data.data.data;
        } catch (e) {
            console.log(e)
        }
    }
}