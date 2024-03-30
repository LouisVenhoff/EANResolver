import ApiController from "./libs/apiController/apiController";
import EanHelper from "./libs/helpers/eanHelper";
import { MinimalProduct } from "./types/eanResolverTypes";

const api:ApiController = new ApiController("87.106.127.217", 3014);

export const checkEan = (ean:string) =>{
    return EanHelper.validateEAN(ean);
}

export const getProduct = async (ean:string):Promise<any> => {
    let product:MinimalProduct = await api.resolveEan(ean);

    return new Promise((resolve, reject) => {resolve(product)});
    
}


const testFuction = async () => {
    console.log(await getProduct("4056489579113"));
}

testFuction();


