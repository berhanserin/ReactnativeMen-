/* eslint-disable react-native/no-inline-styles */
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import 'react-native-gesture-handler';
import {
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Root from './root';
import {useSelector} from 'react-redux';
import {RootState} from './redux/reducer';

const RootApp = () => {
  const transformX = useSharedValue(0);
  const [visible, setVisible] = useState(false);

  const [value, setvalue] = useState(0);

  const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('screen');
  const thresHold = SCREEN_WIDTH / 2;

  //   const panGestureEvent = useAnimatedGestureHandler<
  //     PanGestureHandlerGestureEvent,
  //     {x: number; y: number}
  //   >({
  //     onActive(event, content) {
  //       transformX.value = event.translationX + content.x;
  //       if (transformX.value < thresHold) {
  //         runOnJS(setVisible)(false);
  //       }
  //     },
  //     onStart(_, content) {
  //       content.x = transformX.value;
  //       if (transformX.value < thresHold) {
  //         runOnJS(setVisible)(false);
  //       }
  //     },
  //     onEnd() {
  //       if (transformX.value <= thresHold) {
  //         transformX.value = withTiming(0);
  //         runOnJS(setVisible)(false);
  //       } else {
  //         transformX.value = withTiming(thresHold);
  //         runOnJS(setVisible)(true);
  //       }
  //     },
  //   });

  const rStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      transformX.value,
      [0, SCREEN_WIDTH / 2],
      [0, 3],
      Extrapolate.CLAMP,
    );

    const radius = interpolate(
      transformX.value,
      [0, SCREEN_WIDTH / 2],
      [0, 15],
      Extrapolate.CLAMP,
    );

    runOnJS(setvalue)(radius);
    return {
      borderRadius: radius,
      transform: [
        {perspective: 100},
        {
          translateX: transformX.value,
        },
        {rotateY: `-${rotate}deg`},
      ],
    };
  }, []);

  const getRadius = () => {
    return value;
  };

  const {isMenu, manuBackground} = useSelector((state: RootState) => state.app);

  useEffect(() => {
    if (isMenu) {
      transformX.value = withTiming(thresHold, {}, () => {
        runOnJS(setVisible)(true);
      });
    } else {
      runOnJS(setVisible)(false);
      transformX.value = withTiming(0, {}, () => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenu]);

  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: manuBackground}}>
      {visible ? (
        <View
          style={{
            position: 'absolute',
            top: SCREEN_HEIGHT / 18,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            backgroundColor: 'white',
            width: SCREEN_WIDTH / 2.05,
            height: SCREEN_HEIGHT / 1.12,
            alignItems: 'center',
          }}>
          <View style={{marginTop: SCREEN_HEIGHT / 15}}>
            <TouchableOpacity>
              <Text>Anasayfa</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {/* <PanGestureHandler onGestureEvent={panGestureEvent}> */}
      <Animated.View
        style={[
          {
            flex: 1,
            backgroundColor: 'white',
            position: 'absolute',
            width: SCREEN_WIDTH,
            height: SCREEN_HEIGHT,
          },
          rStyle,
        ]}>
        <Root get={getRadius} />
      </Animated.View>
      {/* </PanGestureHandler> */}
    </GestureHandlerRootView>
  );
};

export default RootApp;
