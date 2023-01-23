import axios from 'axios';
const urlPartners = 'http://zinchi5d.beget.tech/api/cooperation.partners.list';


export default class GetPartner {
    static async GetImage() {
        try{
            let partners = await axios.get(urlPartners);
            return partners.data.data;
        } catch (e) {
            console.log(e)
        }
    }
}