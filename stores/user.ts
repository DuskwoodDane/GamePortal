export const userStore = defineStore('user', () => {
  const userInfo = ref<UserInfoInterface>({
    username: 'Dane',
    token: '',
  });

  const count = ref(2);

  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return {
    userInfo,
    count,
    doubleCount,
    increment,
  };
});
