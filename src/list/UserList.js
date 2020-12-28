import React from 'react'
import { FlatList, View, Text } from 'react-native';
import { useUserList } from '../hooks/UseUserList';
import { Expanded } from '../utility/Expanded';

export const UserList = (props) => {
    const userList = useUserList()

    const renderUserItem = ({item}) => {
        return (
            <View>
                <Text>{item.name}</Text>
            </View>
        )
    }

    const extractKey = (item, index) => {
        return String(index)
    }

    return (
        <Expanded testID='component-userlist'>
            <FlatList data={userList} renderItem={renderUserItem} keyExtractor={extractKey} />
        </Expanded>
    );
}
