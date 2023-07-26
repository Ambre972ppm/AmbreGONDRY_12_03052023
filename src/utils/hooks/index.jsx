import { useState, useEffect } from 'react'

export function useFetch(urlAPI, userId, urlMockedData) {
	const [apiData, setApiData] = useState(null)
	const [mockedData, setMockedData] = useState(null)
	const [isLoading, setLoading] = useState(true)
	const [errorAPI, setErrorAPI] = useState(false)
	const [errorMocked, setErrorMocked] = useState(false)
	
	useEffect(() => {
		setLoading(true)
		async function fetchData(fetchURL, isDataMocked, errorSetState) {
			try {
				const response = await fetch(fetchURL)
				const data = await response.json()
				if (isDataMocked === false) {
					setApiData(data.data)
				} else if (isDataMocked === true) {
					if (userId) {
						setMockedData(
							data.find(
								(item) =>
									item.id === parseInt(userId) ||
									item.userId === parseInt(userId)
							)
						)
					}
				}
			} catch (err) {
				console.log(err)
				if (urlMockedData) {
					fetchData(urlMockedData, true, setErrorMocked)
				}
				errorSetState(true)
			} finally {
				setLoading(false)
			}
		}
		fetchData(urlAPI, false, setErrorAPI)
	}, [urlAPI, userId, urlMockedData])
	return { isLoading, apiData, mockedData, errorAPI, errorMocked }
}
  