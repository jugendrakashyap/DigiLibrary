import { ScrollView, View, TextInput, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const explore = () => {
  return (
    <ScrollView className="flex-1 bg-white px-3 py-4 b-24">
      <View className="flex-row justify-center items-center w-full pl-6 pr-6">
        <TextInput
          placeholder="Search for a book"
          className="border border-gray-300 rounded-tl-lg rounded-bl-lg p-2 h-12 w-full max-w-md bg-gray-200"
        />
        <Ionicons
          className="w-12 h-12 bg-gray-200 p-2 border border-gray-300 rounded-tr-lg rounded-br-lg"
          name="search"
          size={24}
          color="gray"
        />
      </View>
      <View className="w-full h-80 rounded-lg bg-gray-200 mt-3"></View>
    </ScrollView>
  )
}

export default explore