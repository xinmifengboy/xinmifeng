<template>
  <div>
    <button @click="createDatabase">创建数据库</button>
    <button @click="addData">添加数据</button>
    <button @click="getData">获取数据</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'IndexedDBExample',
  setup() {
    const databaseName = ref('exampleDB');
    const objectStoreName =  ref('exampleStore');
    const db = ref(null);

    const createDatabase = () => {
      const request = window.indexedDB.open(databaseName.value, 1);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;

        if (!db.objectStoreNames.contains(objectStoreName.value)) {
          db.createObjectStore(objectStoreName.value);
        }
      };

      request.onsuccess = (event) => {
        db.value = event.target.result;
        console.log('数据库创建成功');
      };

      request.onerror = (event) => {
        console.error('数据库创建失败', event.target.error);
      };
    };

    const addData = () => {
      if (!db.value) return;

      const transaction = db.value.transaction(objectStoreName.value, 'readwrite');
      const store = transaction.objectStore(objectStoreName.value);

      store.add({ id: 1, name: 'John' });
      store.add({ id: 2, name: 'Doe' });

      transaction.oncomplete = () => {
        console.log('数据添加成功');
      };

      transaction.onerror = (event) => {
        console.error('数据添加失败', event.target.error);
      };
    };

    const getData = () => {
      if (!db.value) return;

      const transaction = db.value.transaction(objectStoreName.value, 'readonly');
      const store = transaction.objectStore(objectStoreName.value);

      const getRequest = store.getAll();

      getRequest.onsuccess = (event) => {
        const data = event.target.result;
        console.log('获取的数据:', data);
      };

      getRequest.onerror = (event) => {
        console.error('获取数据失败', event.target.error);
      };
    };

    onMounted(() => {
      createDatabase();
    });

    return {
      createDatabase,
      addData,
      getData,
    };
  },
};
</script>
