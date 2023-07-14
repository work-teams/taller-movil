import React, { useLayoutEffect, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import {
  getServiceName,
  getCategoryName,
  getCategoryById,
} from "../../data/handleFirebase";
import BackButton from "../../components/BackButton/BackButton";
import ViewServicesButton from "../../components/ViewServicesButton/ViewServicesButton";

const { width: viewportWidth } = Dimensions.get("window");

export default function PlaceScreen(props) {
  const { navigation, route } = props;

  const item = route.params?.item;
  const category = getCategoryById(item.categoryId);
  const title = getCategoryName(category.id);

  const [activeSlide, setActiveSlide] = useState(0);

  const slider1Ref = useRef();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: "true",
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    </TouchableHighlight>
  );

  const onPressService = (item) => {
    var name = getServiceName(item);
    let service = item;
    navigation.navigate("Service", { service, name });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <View style={styles.carousel}>
          <Carousel
            ref={slider1Ref}
            data={item.photosArray}
            renderItem={renderImage}
            sliderWidth={viewportWidth}
            itemWidth={viewportWidth}
            inactiveSlideScale={1}
            inactiveSlideOpacity={1}
            firstItem={0}
            loop={false}
            autoplay={false}
            autoplayDelay={500}
            autoplayInterval={3000}
            onSnapToItem={(index) => setActiveSlide(0)}
          />
          <Pagination
            dotsLength={item.photosArray.length}
            activeDotIndex={activeSlide}
            containerStyle={styles.paginationContainer}
            dotColor="rgba(255, 255, 255, 0.92)"
            dotStyle={styles.paginationDot}
            inactiveDotColor="white"
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={slider1Ref.current}
            tappableDots={!!slider1Ref.current}
          />
        </View>
      </View>
      <View style={styles.infoPlaceContainer}>
        <Text style={styles.infoPlaceName}>{item.title}</Text>
        <View style={styles.infoContainer}>
          <TouchableHighlight
            onPress={() =>
              navigation.navigate("PlacesList", { category, title })
            }
          >
            <Text style={styles.category}>
              {getCategoryName(item.categoryId).toUpperCase()}
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.infoContainer}>
          <Image
            style={styles.infoPhoto}
            source={require("../../../assets/icons/location.png")}
          />
          <Text style={styles.infoPlace}>{item.location}</Text>
        </View>

        <View style={styles.infoContainer}>
          <ViewServicesButton
            onPress={() => {
              let services = item.services;
              let title = "Servicios: " + item.title;
              navigation.navigate("ServicesDetails", { services, title });
            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionPlace}>{item.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
