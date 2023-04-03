<script setup lang="ts">
import { getAuth, onAuthStateChanged } from 'firebase/auth';

let name = ref<string>('');
let icon = ref<string>('')

  /*-------------------
  * ユーザー情報取得など
  ----------------------*/
onMounted(()=>{
//getAuth内のcurrentUserにユーザー情報が入っている
const auth:any = getAuth();
onAuthStateChanged(auth, user => {
    name.value = auth.currentUser?.displayName || '';
    icon.value = auth.currentUser?.photoURL || '';
  });
})
  /*-------------------
  * logout
  ----------------------*/
  const googleLogout = () => {
    const { logout } = useAuth()
    logout()
  }
    /*-------------------
  *  middleware
  ----------------------*/
  definePageMeta({
  middleware: ['auth']
})
</script>
<template>
 <div class="index-page">
  <div class="index-page__user">
    <div class="index-page__user-icon"><img :src="icon" alt=""></div>
    <h2 class="index-page__user-name">{{ name }}</h2>
    <button class="logout" @click="googleLogout">ログアウト</button></div>
  </div>
</template>
 
<style lang="scss" scoped>
.index-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100svh;
  font-size: 1.7rem;
  font-weight: bold;
}

.logout {
  display: flex;
    align-items: center;
    justify-content: center;
    width: 16rem;
    height: 6rem;
    background-color: #222;
    color: #fff;
}

.index-page__user {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50rem;
  height: 40rem;
  background-color: #ededed;
  border-radius: 0.6rem;
  text-align: center;
  @include mq(md) {
    width: 90%;
  }
}

.index-page__user-icon {
  width: 8rem;
  height: 8rem;
  border-radius: 100vmax;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.index-page__user-name {
  font-size: 1.6rem;
  font-weight: bold;
  margin:2rem 0 4rem;
}
</style>