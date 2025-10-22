import { StyleSheet, Text, TouchableOpacity ,Image, View } from 'react-native'
import React , { useState }from 'react'
import { launchImageLibrary } from 'react-native-image-picker'

const ProfileImagePicker = ({defaultImage}) => {
    const [profileImage, setProfileImage] = useState(null)
    
    const handleChoosePhoto = () => {
        const options = {
            mediaType: 'photo',
            quality:1 ,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('تم إلغاء الاختيار')
            } else if (response.errorMessage) {
                console.log('خطأ:', response.errorMessage)
            } else {
                const uri = response.assets[0].uri;
                setProfileImage(uri)
            }
        })
    }
  return (
    <View style={styles.profileSection}>
        <TouchableOpacity onPress={handleChoosePhoto}>
            <Image
            source={
                profileImage
                ? { uri: profileImage}
                : defaultImage || require('../../../assets/images/User_Image.png')
            }
            style={styles.profileImage}
            />
        </TouchableOpacity>
    </View>
  )
}

export default ProfileImagePicker

const styles = StyleSheet.create({
    profileSection: {
        alignItems: 'center',
        marginTop: 30,
      },
      profileImage: {
        width: 130,
        height: 130,
        borderRadius: 65,
        borderWidth: 3,
        borderColor: '#ccc',
        
        
      },
     
})