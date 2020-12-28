import React from 'react'
import axios from 'axios'
import { api } from './api'
import data from '../test/mocks/UserMock.json'
jest.mock('axios')

it('Api should return users', async () => {
    axios.get.mockResolvedValueOnce(data)
    const allUsers = await api.fetchAllUsers()
    expect(allUsers).toEqual(        
        expect.arrayContaining([      
          expect.objectContaining({  
            id: 1,
            name: 'Leanne Graham'      
          })
        ])
      )
})