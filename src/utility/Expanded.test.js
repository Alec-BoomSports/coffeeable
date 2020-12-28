import React from 'react'
import { render } from '@testing-library/react-native'
import { Expanded } from './Expanded'

describe('Expanded', () => {
    it('renders properly', () => {
        const view = render(<Expanded />)
        const component = view.getByTestId('component-expanded')
        expect(component).toBeDefined()
    })
    
    it('has the flex property enabled', () => {
        const view = render(<Expanded />)
        const component = view.getByTestId('component-expanded')
        expect(component).toHaveStyle({flex: 1})
    })

    it('ignores flex style prop', () => {
        const view = render(<Expanded style={{flex: 2}} />)
        const component = view.getByTestId('component-expanded')
        expect(component).toHaveStyle({flex: 1})
    })
})
