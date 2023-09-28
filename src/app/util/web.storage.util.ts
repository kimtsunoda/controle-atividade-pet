import { Constants } from "./constant";

export class WebStorageUtil {
    static get(key: string): any {
      return JSON.parse(localStorage.getItem(key)|| '{}');
    }
  
    static set(key: string, value: any) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    static getArray(key: string): any[] {
      if (localStorage.getItem(key) == undefined) {
        localStorage.setItem(key, JSON.stringify([]));
      }
      return JSON.parse(localStorage.getItem(key)|| '{}');
    }
  
    static setArray(key: string, value: any) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    static saveItemArray(keyCollection: string, value: any) {
      let collection = this.getArray(keyCollection);
      collection.push(value);
      this.setArray(keyCollection, collection);
    }
  
    static sequenceId(key: string) {
      return this.getArray(key).length;
    }

    static initializeAtividadesWebStorage(): void {
      if (localStorage.getItem(Constants.ATIVIDADES_KEY) == null) {
         this.set(Constants.ATIVIDADES_KEY, [])
      }
    }

    static initializePetsWebStorage(): void {
      if (localStorage.getItem(Constants.PETS_KEY) == null) {
         this.set(Constants.PETS_KEY, [])
      }
    }

  }
  