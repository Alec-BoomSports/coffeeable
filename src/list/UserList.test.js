import React from 'react'
import { render } from "@testing-library/react-native"
import { UserList } from "./UserList"
import { useUserList } from '../hooks/UseUserList'
import UserMock from '../test/mocks/UserMock.json'
jest.mock('../hooks/UseUserList')

it('UserList Renders properly', async () => {
    useUserList.mockReturnValueOnce([])
    const view = render(<UserList />)
    const component = view.getByTestId('component-userlist')
    expect(component).toBeDefined()
})

it('UserList Renders list items', async () => {
    useUserList.mockReturnValueOnce(UserMock.data)
    const view = render(<UserList />)
    const component = view.getByText(UserMock.data[0].name)
    expect(component).toHaveTextContent(UserMock.data[0].name)
})