import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import {useDispatch, useSelector} from "react-redux"
import { getCountryCode } from '../../redux/CountryCode/actions'

const CountrySelector = () => {
  const [countryCode, setCountryCode] = useState('')
  const options = useMemo(() => countryList().getData(), [])
  const dispatch = useDispatch();

  const changeHandler = countryCode => {
    setCountryCode(countryCode)
    dispatch(getCountryCode(countryCode.value.toLowerCase()));
  }

  return <Select options={options} value={countryCode} onChange={changeHandler} placeholder="Country"/>
}

export default CountrySelector;