export interface IGameToken {
    possibleStringValues:string[];
    
    possibleNumericValues:number[];

    imgLocation:string;

    setStringValue(strValue:string[]):void;

    setNumericValue(numValue:number[]):void;

    setImageUrl(imgLocation:string):void;

}