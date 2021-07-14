import { useEffect, useState } from 'react'

const useFetch = (url: string, timer?: number, existingData?: any) => {
  const [data, setData] = useState({ data: undefined })

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(url, {
          headers: { Authorization: 'a', 'Content-Type': 'application/json' }
        })
        const jsonRes = await res.json()
        setData({ data: jsonRes })
      } catch (error) {
        console.error(error)
      }
    }
    let intervalId: number

    if (!existingData) {
      setData(({ data }) => ({ data }))
    }

    if (timer) {
      intervalId = window.setInterval(async () => getData(), timer)
    }

    return () => clearInterval(intervalId)
  }, [existingData, timer, url])

  return data
}

export default useFetch
