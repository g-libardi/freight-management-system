import Freight from '@/freight/entities/freight'
import FreightRepository from '@/freight/repositories/freight-repository'
import { useEffect, useState } from 'react'


export default function useFreightData() {
  const [data, setData] = useState<Freight[]>([])
  
  useEffect(() => {
    FreightRepository.query().then((data) => {
      setData(data)
      console.log("Data fetched", data)
    })
  }, [])

  return { data, setData }
}
