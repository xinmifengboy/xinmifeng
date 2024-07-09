class IndexedDBService {
  db!: IDBDatabase

  async openDB(databaseName: string, version: number, storeName: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(databaseName, version)

      request.onerror = () => {
        reject('Failed to open database')
      }

      request.onsuccess = () => {
        this.db = request.result
        resolve()
      }

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result
        db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true })
      }
    })
  }

  getObjectStore(storeName: string, mode: IDBTransactionMode = 'readonly'): IDBObjectStore {
    const transaction =  this.db.transaction(storeName, mode)
    return transaction.objectStore(storeName)
  }

  // 查询
  async getAllData(storeName: string): Promise<any[]> {
    const objectStore = this.getObjectStore(storeName)
    const request = objectStore.getAll()

    return new Promise((resolve, reject) => {
      request.onerror = () => {
        reject('Failed to get data from IndexedDB')
      }

      request.onsuccess = () => {
        resolve(request.result)
      }
    })
  }

  async getDataByCondition(storeName: string, condition: Record<string, any>): Promise<any[]> {
    const objectStore = this.getObjectStore(storeName)
    const request = objectStore.openCursor()
    const result: any[] = []
  
    return new Promise((resolve, reject) => {
      request.onerror = () => {
        reject('Failed to get data from IndexedDB')
      }
  
      request.onsuccess = (event: any) => {
        const cursor = event.target.result
        if (cursor) {
          const data = cursor.value
          if (Object.keys(condition).every(key => data[key] === condition[key])) {
            result.push(data)
          }
          cursor.continue()
        } else {
          resolve(result)
        }
      }
    })
  }
  
  // 添加
  async addData(storeName: string, data: any): Promise<void> {
    console.log('this =',this)
    const objectStore =  this.getObjectStore(storeName, 'readwrite')
    const request = objectStore.add(data)

    return new Promise((resolve, reject) => {
      request.onerror = () => {
        reject('Failed to add data to IndexedDB')
      }

      request.onsuccess = () => {
        resolve()
      }
    })
  }

  // 可以根据需求添加其他操作方法，如删除数据、更新数据等
  async updateData(storeName: string, updatedData: any): Promise<void> {
    const objectStore = this.getObjectStore(storeName, 'readwrite')
    const request = objectStore.put(updatedData)

    return new Promise((resolve, reject) => {
      request.onerror = () => {
        reject('Failed to update data in IndexedDB')
      }

      request.onsuccess = () => {
        resolve()
      }
    })
  }

  async deleteData(storeName: string, id: number): Promise<void> {
    const objectStore = this.getObjectStore(storeName, 'readwrite')
    const request = objectStore.delete(id)

    return new Promise((resolve, reject) => {
      request.onerror = () => {
        reject('Failed to delete data from IndexedDB')
      }

      request.onsuccess = () => {
        resolve()
      }
    })
  }

 

  
}
export default IndexedDBService
