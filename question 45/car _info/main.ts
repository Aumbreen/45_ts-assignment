//cars:write a function that stores informationaboiy a car in 
//a object. the function shorld always recive a manufacturer amd a mpdel
// name ,it should then accept an  arbitrary number of keyword arguments. CALL the function with required information and two othersrs, such as a color an optional feacture.print the object thats returned to make sure  all yht information was stored correctly
import { features} from 'process';
 function CarInfo(manufacturer:string, modelName:string,...extraoption:{[key: string]: any} []):object{



        const info={
            manufacturer,
           modelName,
        ...Object.assign({}, ...extraoption)
        }
return info;
     };
let answer=CarInfo('caltas','civic',{color:'black'},{feacture:['navigation','power window']})
console.log(answer);


