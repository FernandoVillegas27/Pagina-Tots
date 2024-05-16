export class TotsTableHelper {
    /**
     * Obtiene el valor de un objeto a traves de la KEY
     * @param item 
     * @param key 
     * @returns 
     */
    static getItemValueByKey(item: any, key: string|Array<string>|undefined): any {
        if(key == undefined||item == undefined){
            return '';
          }
    
          if (typeof key == 'string' && item[key] != undefined) {
            return item[key];
          }
    
          let valueFinal = item;
          for (const keyObj of key!) {
            if(valueFinal[keyObj] == undefined){
              return '';
            }
            valueFinal = valueFinal[keyObj];
          }
          return valueFinal;
    }
}