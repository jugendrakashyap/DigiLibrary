import { ScrollView, View, Text, Image } from 'react-native'

const mybooks = () => {
  return (
    <ScrollView className="flex-1 pl-3 pr-3 gap-3 bg-white">
      <View className="flex-1 flex-row gap-2 w-full h-40 bg-gray-200 rounded-lg mt-3 p-2">
        <View className="w-24 h-full bg-gray-200">
          <Image
            source={require("../../assets/images/books/rules_of_life.jpg")}
            className="w-full h-full rounded-lg"
          />
        </View>
        <View className="h-full rounded-lg p-2">
          <Text className="text-xl font-semibold">Title:</Text>
          <Text className="text-xl font-semibold">Publisher:</Text>
          <Text className="text-xl font-semibold">Language:</Text>
          <Text className="text-xl font-semibold">Genre:</Text>
        </View>
        <View className="h-full rounded-lg p-2">
          <Text className="text-xl font-semibold text-orange-600">Book title</Text>
          <Text className="text-xl">Publisher name</Text>
          <Text className="text-xl">Language</Text>
          <Text className="text-xl">Genre</Text>
        </View>
      </View>
      <View className="flex-1 flex-row gap-2 w-full h-40 bg-gray-200 rounded-lg mt-3 p-2">
        <View className="w-24 h-full bg-gray-200 rounded-lg">
          <Image
            source={require("../../assets/images/books/stop_thinking_negative.jpg")}
            className="w-full h-full rounded-lg"
          />
        </View>
        <View className="h-full rounded-lg p-2">
          <Text className="text-xl font-semibold">Title:</Text>
          <Text className="text-xl font-semibold">Publisher:</Text>
          <Text className="text-xl font-semibold">Language:</Text>
          <Text className="text-xl font-semibold">Genre:</Text>
        </View>
        <View className="h-ful rounded-lg p-2">
          <Text className="text-xl font-semibold text-orange-600">Book title</Text>
          <Text className="text-xl">Publisher name</Text>
          <Text className="text-xl">Language</Text>
          <Text className="text-xl">Genre</Text>
        </View>
      </View>
      <View className="flex-1 flex-row gap-2 w-full h-40 bg-gray-200 rounded-lg mt-3 p-2">
        <View className="w-24 h-full bg-gray-200 rounded-lg">
          <Image
            source={require("../../assets/images/books/time_management.jpg")}
            className="w-full h-full rounded-lg"
          />
        </View>
        <View className="h-full rounded-lg p-2">
          <Text className="text-xl font-semibold">Title:</Text>
          <Text className="text-xl font-semibold">Publisher:</Text>
          <Text className="text-xl font-semibold">Language:</Text>
          <Text className="text-xl font-semibold">Genre:</Text>
        </View>
        <View className="h-full rounded-lg p-2">
          <Text className="text-xl font-semibold text-orange-600">Book title</Text>
          <Text className="text-xl">Publisher name</Text>
          <Text className="text-xl">Language</Text>
          <Text className="text-xl">Genre</Text>
        </View>
      </View>
      <View className="flex-1 flex-row gap-2 w-full h-40 bg-gray-200 rounded-lg mt-3 p-2">
        <View className="w-24 h-full bg-gray-200 rounded-lg">
          <Image
            source={require("../../assets/images/books/basic_design.jpg")}
            className="w-full h-full rounded-lg"
          />
        </View>
        <View className="h-full rounded-lg p-2">
          <Text className="text-xl font-semibold">Title:</Text>
          <Text className="text-xl font-semibold">Publisher:</Text>
          <Text className="text-xl font-semibold">Language:</Text>
          <Text className="text-xl font-semibold">Genre:</Text>
        </View>
        <View className="h-full rounded-lg p-2">
          <Text className="text-xl font-semibold text-orange-600">Book title</Text>
          <Text className="text-xl">Publisher name</Text>
          <Text className="text-xl">Language</Text>
          <Text className="text-xl">Genre</Text>
        </View>
      </View>
      <View className="flex-1 flex-row gap-2 w-full h-40 bg-gray-200 rounded-lg mt-3 p-2">
        <View className="w-24 h-full bg-gray-200 rounded-lg">
          <Image
            source={require("../../assets/images/books/bhagat_singh.jpeg")}
            className="w-full h-full rounded-lg"
          />
        </View>
        <View className="h-full rounded-lg p-2">
          <Text className="text-xl font-semibold">Title:</Text>
          <Text className="text-xl font-semibold">Publisher:</Text>
          <Text className="text-xl font-semibold">Language:</Text>
          <Text className="text-xl font-semibold">Genre:</Text>
        </View>
        <View className="h-full rounded-lg p-2">
          <Text className="text-xl font-semibold text-orange-600">Book title</Text>
          <Text className="text-xl">Publisher name</Text>
          <Text className="text-xl">Language</Text>
          <Text className="text-xl">Genre</Text>
        </View>
      </View>
      <View className="flex-1 flex-row gap-2 w-full h-40 bg-gray-200 rounded-lg mt-3 p-2">
        <View className="w-24 h-full bg-gray-200 rounded-lg">
          <Image
            source={require("../../assets/images/books/rules_of_life.jpg")}
            className="w-full h-full rounded-lg"
          />
        </View>
        <View className="h-full rounded-lg p-2">
          <Text className="text-xl font-semibold">Title:</Text>
          <Text className="text-xl font-semibold">Publisher:</Text>
          <Text className="text-xl font-semibold">Language:</Text>
          <Text className="text-xl font-semibold">Genre:</Text>
        </View>
        <View className="h-full rounded-lg p-2">
          <Text className="text-xl font-semibold text-orange-600">Book title</Text>
          <Text className="text-xl">Publisher name</Text>
          <Text className="text-xl">Language</Text>
          <Text className="text-xl">Genre</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default mybooks