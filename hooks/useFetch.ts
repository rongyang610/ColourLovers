import { useEffect, useState } from 'react'

const useFetch = (url: string) => {
  const [data, setData] = useState({ data: undefined, loading: true })

  useEffect(() => {
    setData(({ data }) => ({ data, loading: true }))
    fetch(url)
      .then((res) => res.json())
      .then((jsonRes) => setData({ data: jsonRes, loading: false }))
      .catch((error) => {
        console.error({ error })
      })
  }, [url])

  return data
}

export default useFetch
