
import { View, Text,TouchableOpacity,ActivityIndicator } from 'react-native'
import { useRouter } from "expo-router";

import { COLORS } from "../../../constants";

import useFetch from "../../../hook/useFetch";

import styles from './nearbyjobs.style'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

const Nearbyjobs = () => {
  const router=useRouter()

  const {data,isLoading,error}=useFetch('search',{
    query: 'React Native Developer',
    num_pages:1
  })
  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <Text style={styles.headerTitle} >Yakınındaki İşler</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Tümünü Göster</Text>
        </TouchableOpacity>
      </View>

        <View style={styles.cardsContainer} >
        {
          isLoading?
          <ActivityIndicator/>
          :error?(
            <Text>Bir Sorun Var</Text>
          )
          : 
            (
              data?.map((job) => (
                <NearbyJobCard
                
                  job={job}
                  key={`nearby-job-${job.job_id}`}
                  handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
                />
              ))
            )
        }
        </View>

    </View>
  )
}

export default Nearbyjobs