import { Text, View, TextInput, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Link } from "expo-router";
import "../../global.css"

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-white px-3 py-5">
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
      <View className="w-full h-48 bg-gray-300 rounded-xl mt-4 max-w-md shadow-lg border border-gray-200">
        <Image
          source={require("../../assets/images/cover1.png")}
          className="w-full h-48 rounded-xl"
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
        className="rounded-lg w-full mt-4"
      >
        <TouchableOpacity className="px-2 rounded-lg flex flex-col items-center">
          <Image
            source={require("../../assets/images/icons/fiction.jpeg")}
            className="w-12 h-12 rounded-xl"
          />
          <Text className="text-center text-gray-600">Fiction</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-2 rounded-lg flex flex-col items-center">
          <Image
            source={require("../../assets/images/icons/non-fiction.png")}
            className="w-14 h-12 rounded-xl"
          />
          <Text className="text-center text-gray-600">Non-Fiction</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-2 rounded-lg flex flex-col items-center">
          <Image
            source={require("../../assets/images/icons/science.jpg")}
            className="w-12 h-12 rounded-xl"
          />
          <Text className="text-center text-gray-600">Science</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-2 rounded-lg flex flex-col items-center">
          <Image
            source={require("../../assets/images/icons/history.avif")}
            className="w-12 h-12 rounded-xl"
          />
          <Text className="text-center text-gray-600">History</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-2 rounded-lg flex flex-col items-center">
          <Image
            source={require("../../assets/images/icons/biography.png")}
            className="w-12 h-12 rounded-xl"
          />
          <Text className="text-center text-gray-600">Biography</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-2 rounded-lg flex flex-col items-center">
          <Image
            source={require("../../assets/images/icons/technology.jpg")}
            className="w-12 h-12 rounded-xl"
          />
          <Text className="text-center text-gray-600">Technology</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-2 rounded-lg flex flex-col items-center">
          <Image
            source={require("../../assets/images/icons/health.avif")}
            className="w-12 h-12 rounded-xl"
          />
          <Text className="text-center text-gray-600">Health</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-2 rounded-lg flex flex-col items-center">
          <Image
            source={require("../../assets/images/icons/travel.jpg")}
            className="w-12 h-12 rounded-xl"
          />
          <Text className="text-center text-gray-600">Travel</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-2 rounded-lg flex flex-col items-center">
          <Image
            source={require("../../assets/images/icons/cooking.avif")}
            className="w-12 h-12 rounded-xl"
          />
          <Text className="text-center text-gray-600">Cooking</Text>
        </TouchableOpacity>
        <TouchableOpacity className="px-2 rounded-lg flex flex-col items-center">
          <Image
            source={require("../../assets/images/icons/more.png")}
            className="w-12 h-12 rounded-xl"
          />
          <Text className="text-center text-gray-600">more</Text>
        </TouchableOpacity>
      </ScrollView>
      <View className="bg-gray-200 rounded-lg mt-4">
        <Text className="font-semibold mt-4 ml-4 text-2xl">Suggested for you</Text>
        <View className="w-full bg-gray-200 rounded-lg mt-4 flex flex-row justify-evenly pb-8 flex-wrap">
          <View className="w-40 h-60 bg-gray-300 rounded-lg mt-2">
            <Image
              source={require("../../assets/images/books/stop_thinking_negative.jpg")}
              className="w-40 h-60 rounded-lg"
            />
          </View>
          <View className="w-40 h-60 bg-gray-300 rounded-lg mt-2">
            <Image
              source={require("../../assets/images/books/professional_brochure.jpg")}
              className="w-40 h-60 rounded-lg"
            />
          </View>
          <View className="w-40 h-60 bg-gray-300 rounded-lg mt-8">
            <Image
              source={require("../../assets/images/books/create_bussiness.jpg")}
              className="w-40 h-60 rounded-lg"
            />
          </View>
          <View className="w-40 h-60 bg-gray-300 rounded-lg mt-8">
            <Image
              source={require("../../assets/images/books/rules_of_life.jpg")}
              className="w-40 h-60 rounded-lg"
            />
          </View>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }}
        className="w-full mb-6 rounded-xl mt-4 bg-gray-300 p-4"
      >
        <View className="w-40 h-60 bg-gray-300 rounded-lg">
          <Image
            source={require("../../assets/images/books/basic_design.jpg")}
            className="w-40 h-60 rounded-lg"
          />
        </View>
        <View className="w-40 h-60 bg-gray-300 rounded-lg">
          <Image
            source={require("../../assets/images/books/bhagat_singh.jpeg")}
            className="w-40 h-60 rounded-lg"
          />
        </View>
        <View className="w-40 h-60 bg-gray-300 rounded-lg">
          <Image
            source={require("../../assets/images/books/create_bussiness.avif")}
            className="w-40 h-60 rounded-lg"
          />
        </View>
        <View className="w-40 h-60 bg-gray-300 rounded-lg">
          <Image
            source={require("../../assets/images/books/internet_marketing.jpg")}
            className="w-40 h-60 rounded-lg"
          />
        </View>
        <View className="w-40 h-60 bg-gray-300 rounded-lg">
          <Image
            source={require("../../assets/images/books/professional_brochure.jpg")}
            className="w-40 h-60 rounded-lg"
          />
        </View>
        <View className="w-40 h-60 bg-gray-300 rounded-lg">
          <Image
            source={require("../../assets/images/books/rules_of_life.jpg")}
            className="w-40 h-60 rounded-lg"
          />
        </View>
        <View className="w-40 h-60 bg-gray-300 rounded-lg">
          <Image
            source={require("../../assets/images/books/stop_thinking_negative.jpg")}
            className="w-40 h-60 rounded-lg"
          />
        </View>
        <View className="w-40 h-60 bg-gray-300 rounded-lg">
          <Image
            source={require("../../assets/images/books/time_management.jpg")}
            className="w-40 h-60 rounded-lg"
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
}