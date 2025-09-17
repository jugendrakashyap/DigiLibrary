import { ScrollView, View, Text, Image } from 'react-native'

const profile = () => {
  return (
    <ScrollView className="flex-1 px-3 gap-3 bg-white">
      <View className="flex-1 items-center gap-2 w-full bg-gray-200 rounded-lg mt-3 px-3 py-5">
        <View className="w-40 h-44 bg-gray-200">
          <Image
            source={require("../../assets/images/dp.jpg")}
            className="w-full h-full rounded-lg"
          />
        </View>
        <View className="flex-1 flex-row ">
          <View className="h-full rounded-lg py-2">
            <Text className="text-xl font-semibold">Name:</Text>
            <Text className="text-xl font-semibold">DOB:</Text>
            <Text className="text-xl font-semibold">Email:</Text>
            <Text className="text-xl font-semibold">Mobile:</Text>
          </View>
          <View className="h-full rounded-lg p-2">
            <Text className="text-xl font-semibold text-orange-600">Jugendra Kashyap</Text>
            <Text className="text-xl">15/07/2006</Text>
            <Text className="text-xl">kjugendra63@gmail.com</Text>
            <Text className="text-xl">7217205976</Text>
          </View>
        </View>
      </View>
      <View className="flex-1 flex-row gap-2 w-full h-96 bg-gray-200 rounded-lg mt-3 p-2"></View>
    </ScrollView>
  )
}

export default profile