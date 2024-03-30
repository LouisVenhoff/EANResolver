import axios from "axios";
import { MinimalProduct } from "../../types/eanResolverTypes";

class ApiController{

    private host:string;
    private port:number;

    constructor(host:string, port:number)
    {
        this.host = host;
        this.port = port;
    }


    public async resolveEan(ean:string):Promise<MinimalProduct> {
        let response:any = await axios.get(`http://${this.host}:${this.port}/api/sendCode/${ean}`, {});

        return new Promise((resolve, reject) => {
            resolve(this.convertRawToMP(response.data));
        });
    }

    private convertRawToMP(data:any):MinimalProduct{
        return {error: data.error, name: data.name, ean: data.code}
    }

    


};

export default ApiController;