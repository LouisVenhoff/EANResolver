import axios from "axios";
import { MinimalProduct } from "../../types/eanResolverTypes";
import EanHelper from "../helpers/eanHelper";
import { EanError } from "../../enums/eanError";
class ApiController{

    private host:string;
    private port:number;

    constructor(host:string, port:number)
    {
        this.host = host;
        this.port = port;
    }


    public async resolveEan(ean:string):Promise<MinimalProduct> {
        let isValid:boolean = EanHelper.validateEAN(ean);

    
        return new Promise(async (resolve, reject) => {
            
            let response:any = await axios.get(`http://${this.host}:${this.port}/api/sendCode/${ean}`, {});
            
            if(!isValid){
                resolve({error: EanError.INVALID_CHECKSUM, name:"", ean:""});
                return;
            }

            resolve(this.convertRawToMP(response.data));
        });
    }

    private convertRawToMP(data:any):MinimalProduct{
        return {error: data.error, name: data.name, ean: data.code}
    }

    


};

export default ApiController;