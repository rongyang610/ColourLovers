import { useEffect, useState } from 'react'

const useFetch = (url: string, timer?: number) => {
  const [data, setData] = useState({ data: undefined, loading: true })

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url)
        const jsonRes = await res.json()
        setData({ data: jsonRes, loading: false })
      } catch (error) {
        console.error(error)
      }
    }
    let intervalId: number

    setData(({ data }) => ({ data, loading: true }))

    if (timer) {
      intervalId = window.setInterval(async () => getData(), timer)
    }

    getData()

    return () => clearInterval(intervalId)
  }, [timer, url])

  return data
}

export default useFetch
