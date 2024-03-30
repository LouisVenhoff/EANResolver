import ApiController from "./libs/apiController/apiController";
import EanHelper from "./libs/helpers/eanHelper";

const api:ApiController = new ApiController("ahjsdhasd", 3000);

export const checkEan = (ean:string) =>{
    return EanHelper.validateEAN(ean);
}

export const getProduct = async (ean:string):Promise<any> => {

}


