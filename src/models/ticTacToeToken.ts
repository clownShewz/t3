import { IGameToken } from './IGameToken';

export class TicTacToeToken implements IGameToken {
        
    possibleStringValues:string[];
    
    possibleNumericValues:number[];
    
        imgLocation:string;
    
        setStringValue(strValue:string[]):void{
            this.possibleStringValues = strValue;
        }
    
        setNumericValue(numValues:number[]):void{
            this.possibleNumericValues = numValues;
        }
    
        setImageUrl(imgLocation:string):void{
            this.imgLocation = imgLocation;
        }

}