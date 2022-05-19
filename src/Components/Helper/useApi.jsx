import { useEffect, useState } from 'react'

const useApi = (payload) => {
  const [data, setData] = useState([])

  useEffect(() => {
    ;(async () => {
      const result = await fetch(`https://randomuser.me/api/?gender=${payload}`)
      const res = await result.json()
      console.log(res.results)
      setData(res.results)
    })()
  }, [])

  return { data }
}

export default useApi
