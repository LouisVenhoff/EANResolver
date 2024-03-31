import ApiController from "./libs/apiController/apiController";
import EanHelper from "./libs/helpers/eanHelper";
import { MinimalProduct } from "./types/eanResolverTypes";

const api:ApiController = new ApiController("87.106.127.217", 3014);

const checkEan = (ean:string) =>{
    return EanHelper.validateEAN(ean);
}

const getProduct = async (ean:string):Promise<MinimalProduct> => {
    let product:MinimalProduct = await api.resolveEan(ean);

    return new Promise((resolve, reject) => {resolve(product)});
    
}


module.exports = checkEan;
module.exports = getProduct;




