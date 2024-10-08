import { useRef, useEffect } from 'react'

export default function useDocumentTitle (title: string, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title)

  useEffect(() => {
    document.title = title + ' - UA3D'
  }, [title])

  useEffect(() => () => {
    if (!prevailOnUnmount) {
      document.title = defaultTitle.current
    }
  }, [prevailOnUnmount])
}
