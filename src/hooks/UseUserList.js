import { useCallback, useEffect, useState } from 'react'
import { api } from '../api/api'

export function useUserList() {
    const [userList, setUserList] = useState([])

    const handleFetchUserList = useCallback(async () => {
        const users = await api.fetchAllUsers()
        setUserList(users)
    }, [])

    useEffect(() => {
        handleFetchUserList()
    }, [])

    return userList
}