import useRouterHistory from './useRouterHistory'

const canUseDOM = !!(
  typeof window !== 'undefined' && window.document && window.document.createElement
)

export default function (createHistory) {
  let history
    alert('go-go')
  if (canUseDOM)
    history = useRouterHistory(createHistory)()
  return history
}
