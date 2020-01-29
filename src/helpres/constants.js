const BASE_URL = 'https://api.github.com'

export const URL = {
  userProfile: `${BASE_URL}/users`,
  users: `${BASE_URL}/users?since=50000000`
}

export const TABS = [
  {
    id: 'repos',
    title: 'Список репозиториев'
  },
  {
    id: 'follows',
    title: 'Список подписок'
  }
]