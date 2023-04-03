<script setup lang="ts">
const googleSignUp = () => {
    const { login ,user} = useAuth()
    login()
  }
</script>

<template>
  <div class="signup-form">
    <p class="title">SNSアカウントで登録</p>
    <button class="google-button" @click="googleSignUp"><span>Googleで登録</span></button>
  </div>
</template>
 
<style lang="scss" scoped>
.signup-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 50rem;
  background-color: #ededed;
  border-radius: 0.6rem;
  text-align: center;
  padding: 6rem;
  @include mq(md) {
    width: 90%;
  }
  .title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .google-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16rem;
    height: 6rem;
    background-color: #222;
    color: #fff;
    margin: auto;
  }
}
</style>