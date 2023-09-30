import { Constants } from "./constant";

export class WebStorageUtil {
    static get(key: string): any {
      return JSON.parse(localStorage.getItem(key)|| '{}');
    }
  
    static set(key: string, value: any) {
      localStorage.setItem(key, JSON.stringify(value));
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
  