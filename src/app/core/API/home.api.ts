const HOME_API = {
  BANNER: 'fee177346e7875554413',
  NEWS_LIST: 'd275425a434e02acf2f7',
  NEWS_ITEM_BY_ID: (id: number) => `d275425a434e02acf2f7/News/${id}`,
  NEWS_CATEGORY: '91298d970c27e9a06518',
} as const

export default HOME_API
