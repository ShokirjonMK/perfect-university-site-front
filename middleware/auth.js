export default async function ({ store, redirect }) {
  const user = store.state.auth.user
  console.log('user', user)
  if (!user) {
    try {
      await store.dispatch('auth/getTokens')
      await store.dispatch('auth/fetchProfile')
    } catch (e) {
      localStorage.removeItem('access')
      redirect('/')
    }
  }
}
