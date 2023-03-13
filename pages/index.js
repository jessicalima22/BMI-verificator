import Head from 'next/head'
import Image from 'next/image'
import Title from '../components/Title'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Table from '../components/Table'
import InputWeight from '../components/InputWeight'
import InputHeight from '../components/InputHeight'
import Button from '../components/Button'
import Result from '../components/Result'






  
export default function Home() {

  const [weight, setWeight]=useState()
  const [height, setHeight]=useState()
  const [result, setResult]=useState()
  
  return (
    <>
    <Title/>
    <InputWeight w={weight} sw={setWeight}/>
    <InputHeight h={height} sh={setHeight}/>
    <Button h={height} w={weight} sr={setResult}/>
    <Result r={result}/>
    <Table/>
    </>
  )
}
