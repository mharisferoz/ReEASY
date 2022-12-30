import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'twrnc';

const DetailViewScreen = () => {
  const [currentImage, setCurrentImage] = React.useState(
    require('../Image/home1.jpg'),
  );
  const galleryImagesUrl = [
    {url: require('../Image/home1.jpg')},
    {url: require('../Image/home2.webp')},
    {url: require('../Image/home3.jpeg')},
    {url: require('../Image/home4.jpeg')},
    {url: require('../Image/home5.jpeg')},
    {url: require('../Image/home6.jpeg')},
  ];
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={styles.imageContainer}>
        <Image
          style={{
            resizeMode: 'cover',
            width: '100%',
            height: '100%',
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
          source={currentImage}
        />
        <View style={styles.propertyStats}>
          <Text style={styles.name}>Vacation Home</Text>
          <View>
            <Text style={styles.price}>$1800</Text>
            <Text
              style={{color: '#818180', marginVertical: 2, fontWeight: '500'}}>
              /month
            </Text>
          </View>
        </View>
      </View>

      <View style={{marginTop: 50, paddingHorizontal: 20}}>
        <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.title}>Gallery</Text>
            <ScrollView
              scrollEnabled={true}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.gallery}>
                {galleryImagesUrl.map((image, i) => (
                  <TouchableOpacity
                    key={i}
                    onPress={() => {
                      setCurrentImage(image.url);
                    }}>
                    <Image
                      style={styles.galleryImage}
                      key={i}
                      source={image.url}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
          <View style={{marginTop: 20, paddingBottom: 300}}>
            <Text style={styles.title}>Description</Text>
            <View style={{marginTop: 20}}>
              <Text style={styles.description}>
                Are you looking for a comfortable and convenient place to call
                home? Look no further! Our apartment is spacious and modern,
                with all the amenities you need to feel right at home.
              </Text>
              <Text style={styles.description}>
                The apartment features a fully equipped kitchen with stainless
                steel appliances and plenty of counter space for cooking and
                entertaining. The living room is bright and inviting, with
                plenty of natural light and comfortable furnishings. The bedroom
                is spacious and features a comfortable bed and plenty of storage
                space.
              </Text>
              <Text style={styles.description}>
                The apartment complex is well-maintained and features a variety
                of amenities, including a fitness center, pool, and outdoor
                grilling area. The location is unbeatable, with easy access to
                public transportation, shopping, and dining options.
              </Text>
              <Text style={styles.description}>
                Don't miss out on the opportunity to make this apartment your
                new home. Contact us today to schedule a tour and learn more
                about rental terms and availability.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 300,
  },
  propertyStats: {
    position: 'absolute',
    bottom: '-10%',
    width: '80%',
    left: '10%',
    backgroundColor: '#373731',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
  },
  name: {
    fontWeight: '700',
    color: '#fff',
    fontSize: 20,
  },
  price: {
    color: '#e7e6e6',
    fontSize: 18,
    fontWeight: '600',
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  gallery: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  galleryImage: {
    borderRadius: 12,
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginHorizontal: 7,
  },
  description: {
    marginVertical: 10,
    color: '#000000a3',
    fontSize: 18,
    lineHeight: 35,
  },
});

export default DetailViewScreen;
