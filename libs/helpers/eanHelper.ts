class EanHelper
{
    public static validateEAN(ean:string):boolean
    {
        let checksum:number = parseInt(ean[ean.length - 1]);
        
        let rawEan:string = ean.substring(0, ean.length -1);

        let calculatedChecksum:number = this.calculateChecksum(rawEan);

        return calculatedChecksum === checksum;
    }

    private static calculateChecksum(rawEan:string):number
    {
        let elementArr:string[] = rawEan.split("");

        let reversed:string[] = elementArr.reverse();

        let weightedCrossSum:number = 0;


        for(let i = 0; i < reversed.length; i++){
            let factor:number = EanHelper.isEqual(i) ? 3 : 1;

            weightedCrossSum += parseInt(reversed[i]) * factor;

        }

        return EanHelper.getChecksumFromCrosssum(weightedCrossSum);


    }

    private static isEqual(inputNumber:number):boolean{

        if(inputNumber % 2 === 0){
            return true;
        }
        else{
            return false;
        }
    }

    private static getChecksumFromCrosssum(inputNumber:number):number{
        let rounded:number = Math.ceil((inputNumber / 10))*10;

        return rounded - inputNumber;
    }
}

export default EanHelper;