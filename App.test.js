import React from 'react'
import { render, waitFor } from '@testing-library/react-native'
import App from './App'
jest.mock('./src/api/api.js')

it('App Renders', async () => {
    const view = render(<App />)
    const component = await view.findByTestId('component-app')
    expect(component).toBeDefined()
})