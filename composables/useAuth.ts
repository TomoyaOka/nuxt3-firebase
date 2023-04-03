import type { Auth, User } from "firebase/auth";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import { computed, ref } from "vue";

export function useAuth(auth: Auth = getAuth()) {
  //userの中にユニークユーザー情報が格納されている
  const user = ref<User | null>(auth.currentUser);
  const isAuthed = computed(() => !!user.value);

  // idTokenが変化したら更新する
  auth.onIdTokenChanged((authUser) => (user.value = authUser));

  // ********************************************************
  // * methods
  // ********************************************************
  // 認証状態チェック
  async function checkAuthState() {
    try {
      const _user = await _checkAuthState(auth);
      user.value = _user;
    } catch (error) {
      user.value = null;
    }
  }
  
  // ログイン
  async function login() {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      //ログイン後、トップページに遷移
      await navigateTo("/", { replace: true });
      // ログイン後にユーザー情報を取得する
     onAuthStateChanged(
      auth,
      (authUser) => {
        user.value = authUser;
      },
      (error) => {
        throw error;
      }
    );
    } catch (error) {
      throw error;
    }
  }

  // ログアウト
  async function logout() {
    try {
      await signOut(auth);
      user.value = null;
      //ログアウト後、ログインページに遷移
      await navigateTo("/login", { replace: true });
    } catch (error) {
      throw error;
    }
  }

  return { isAuthed, user, checkAuthState, login, logout };
}


// ********************************************************
// * utils
// ********************************************************
// onAuthStateChangedのPromise版Util
async function _checkAuthState(auth: Auth) {
  return new Promise<User | null>((resolve, reject) => {
    // client only
    if (process.server) return resolve(null);
    onAuthStateChanged(
      auth,
      (user) => resolve(user || null),
      (error) => reject(error)
    );
  });

}