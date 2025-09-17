import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native'

const saved = () => {
  return (
    <ScrollView className="p-3 gap-3 bg-white">
      <View className="flex flex-row flex-wrap gap-4 justify-evenly">
        <View className="flex items-center gap-3 w-48 bg-gray-200 rounded-lg mt-2 py-3">
          <Image
            source={require("../../assets/images/books/stop_thinking_negative.jpg")}
            className="w-40 h-60 rounded-lg"
          />
          <TouchableOpacity className="flex items-center border border-red-600 rounded-lg w-32 p-2 mb-2">
            <Text className="text-lg text-red-600">Remove</Text>
          </TouchableOpacity>
        </View>
        <View className="flex items-center gap-3 w-48 h-92 bg-gray-200 rounded-lg mt-2 py-3">
          <Image
            source={require("../../assets/images/books/professional_brochure.jpg")}
            className="w-40 h-60 rounded-lg"
          />
          <TouchableOpacity className="flex items-center border border-red-600 rounded-lg w-32 p-2 mb-2">
            <Text className="text-lg text-red-600">Remove</Text>
          </TouchableOpacity>
        </View>
        <View className="flex items-center gap-3 w-48 h-92 bg-gray-200 rounded-lg mt-2 py-3">
          <Image
            source={require("../../assets/images/books/create_bussiness.jpg")}
            className="w-40 h-60 rounded-lg"
          />
          <TouchableOpacity className="flex items-center border border-red-600 rounded-lg w-32 p-2 mb-2">
            <Text className="text-lg text-red-600">Remove</Text>
          </TouchableOpacity>
        </View>
        <View className="flex items-center gap-3 w-48 h-92 bg-gray-200 rounded-lg mt-2 py-3">
          <Image
            source={require("../../assets/images/books/rules_of_life.jpg")}
            className="w-40 h-60 rounded-lg"
          />
          <TouchableOpacity className="flex items-center border border-red-600 rounded-lg w-32 p-2 mb-2">
            <Text className="text-lg text-red-600">Remove</Text>
          </TouchableOpacity>
        </View>
        <View className="flex items-center gap-3 w-48 h-92 bg-gray-200 rounded-lg mt-2 py-3">
          <Image
            source={require("../../assets/images/books/rules_of_life.jpg")}
            className="w-40 h-60 rounded-lg"
          />
          <TouchableOpacity className="flex items-center border border-red-600 rounded-lg w-32 p-2 mb-2">
            <Text className="text-lg text-red-600">Remove</Text>
          </TouchableOpacity>
        </View>
        <View className="flex items-center gap-3 w-48 h-92 bg-gray-200 rounded-lg mt-2 py-3">
          <Image
            source={require("../../assets/images/books/rules_of_life.jpg")}
            className="w-40 h-60 rounded-lg"
          />
          <TouchableOpacity className="flex items-center border border-red-600 rounded-lg w-32 p-2 mb-2">
            <Text className="text-lg text-red-600">Remove</Text>
          </TouchableOpacity>
        </View>
        <View className="flex items-center gap-3 w-48 h-92 bg-gray-200 rounded-lg mt-2 py-3">
          <Image
            source={require("../../assets/images/books/rules_of_life.jpg")}
            className="w-40 h-60 rounded-lg"
          />
          <TouchableOpacity className="flex items-center border border-red-600 rounded-lg w-32 p-2 mb-2">
            <Text className="text-lg text-red-600">Remove</Text>
          </TouchableOpacity>
        </View>
        <View className="flex items-center gap-3 w-48 h-92 bg-gray-200 rounded-lg mt-2 py-3">
          <Image
            source={require("../../assets/images/books/rules_of_life.jpg")}
            className="w-40 h-60 rounded-lg"
          />
          <TouchableOpacity className="flex items-center border border-red-600 rounded-lg w-32 p-2 mb-2">
            <Text className="text-lg text-red-600">Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default saved