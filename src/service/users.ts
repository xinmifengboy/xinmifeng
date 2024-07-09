import IndexedDBService from './index'


interface Iuser {
  id?: number,
  name?: string | number,
  coins?: number,
  diamond?: number
}
const dbName = 'game'
const tableName = 'users'

const indexedDBService = new IndexedDBService()

indexedDBService.openDB(dbName, 1, tableName)

export const usersAdd = async (data: Iuser) => {
  data.id = Date.now()
  await indexedDBService.addData(tableName, data)
  return '操作成功'
}

export const usersFind = async (data: any) => {
  return await indexedDBService.getDataByCondition(tableName, data)
}

export const usersUpdate = async (id: number, data: Iuser) => {}

export const usersDelete = async (id: number) => {}

export const usersList = async () => {}
