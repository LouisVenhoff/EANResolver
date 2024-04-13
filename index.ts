import ApiController from "./libs/apiController/apiController";
import EanHelper from "./libs/helpers/eanHelper";
import { MinimalProduct } from "./types/eanResolverTypes";


class Resolver {
    private api:ApiController = new ApiController("87.106.127.217", 3014);

    public checkEan(ean:string){
        return EanHelper.validateEAN(ean);
    }
    
    public async getProduct(ean:string):Promise<MinimalProduct>{
        
        let eanValid:boolean = this.checkEan(ean);

        if(!eanValid){
            return new Promise((resolve, reject) => {resolve({error: 2, name: "", ean: ean })});
        }
        
        
        let product:MinimalProduct = await this.api.resolveEan(ean);
    
        return new Promise((resolve, reject) => {resolve(product)});
 
    }
}

module.exports = Resolver;

export default Resolver;




