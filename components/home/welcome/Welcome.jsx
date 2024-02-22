import React,{useState} from 'react'
import { 
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native'

import { useRouter } from "expo-router";

import styles from './welcome.style'
import { icons,SIZES } from "../../../constants";

const jobTypes=["Tam Zamanlı","Yar Zamanlı","Sözleşmeli","Remote"]

const Welcome = () => {
const router=useRouter()
  const [activeJobType, setActiveJobType] = useState("Tam Zamanlı");

  return (
    <View>
     <View style={styles.container} >
      <Text style={styles.userName} >Merhaba Nurettin</Text>
      <Text style={styles.welcomeMessage} >Sana uygun en iyi işi bul</Text>
     </View>
     <View style={styles.searchContainer}>
    <View style={styles.searchWrapper} >
    <TextInput
    style={styles.searchInput}
    value=""
    onChange={()=>{}}
    placeholder='Hayalindeki işi gir'
    />
    </View>
    <TouchableOpacity style={styles.searchBtn} onPress={()=>{}} >
      <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
    </TouchableOpacity>
     </View>

    <View style={styles.tabsContainer}>
      <FlatList
      data={jobTypes}
      renderItem={({item})=>(
      <TouchableOpacity style={styles.tab(activeJobType,item)} onPress={()=>{
        setActiveJobType(item)
        router.push(`/search/${item}`)
      }} >
        <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
      </TouchableOpacity>)}
      keyExtractor={item=>item}
      contentContainerStyle={{columnGap:SIZES.small}}
      horizontal
      showsHorizontalScrollIndicator={false}
      />
    </View>

    </View>
  )
}

export default Welcome