import EanHelper from "./libs/helpers/eanHelper";

export const checkEan = (ean:string) =>{
    return EanHelper.validateEAN(ean);
}

export const fetchProduct = async (ean:string):Promise<any> => {

}