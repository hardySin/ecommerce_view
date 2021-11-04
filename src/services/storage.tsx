 

    class StorageItems  {
 
        storage
          constructor()
        {
                this.storage=localStorage;;
        }
 
        setItem(key:any,item:any)
        {
            this.storage.setItem(key,item)   
        }

        getItem(key:any)
        {
            return this.storage.getItem(key);  
         }

         removeItem(key:any)
         {
             this.storage.removeItem(key)
         }

         clearItem()
         {
             this.storage.clear()
         }

       }

export default new StorageItems();