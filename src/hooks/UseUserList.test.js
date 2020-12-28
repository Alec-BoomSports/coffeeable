import React from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { useUserList } from './UseUserList'
import data from '../test/mocks/UserMock.json'
import axios from 'axios'
jest.mock('axios')

it('Should work', async () => {
    // Replace get function for this test
    axios.get.mockResolvedValueOnce(data)
    
    // Call the hook
    const hook = renderHook(() => useUserList())

    // Check for start
    expect(hook.result.current).toEqual([])

    // Await until the hook finishes
    await hook.waitForNextUpdate()

    // Expect some data
    expect(hook.result.current).toEqual(        
        expect.arrayContaining([      
          expect.objectContaining({  
            id: 1,
            name: 'Leanne Graham'      
          })
        ])
      )
})

