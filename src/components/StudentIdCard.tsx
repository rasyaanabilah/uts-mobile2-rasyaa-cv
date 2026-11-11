
import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  PanResponder,
} from "react-native";
import Svg, { Line } from "react-native-svg";

import type { ProfileData } from "../data/profileTypes";
import styles from "../styles/cardStyles";

const ACCENT = "#10B981";

type Props = {
  width: number;
  isDesktop: boolean;
  profile: ProfileData;
};

export default function StudentIdCard({
  width,
  isDesktop,
  profile,
}: Props) {
  const cardWidth = Math.max(0, Math.min(width, 260));
  const cardHeight = cardWidth * 1.42;
  const lanyardBase = Math.min(75, cardWidth * 0.25);
  const stageHeight = cardHeight + lanyardBase;

  const pan = useRef(new Animated.ValueXY()).current;

  const [drag, setDrag] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const listener = pan.addListener(({ x, y }) => {
      setDrag({ x, y });
    });

    return () => pan.removeListener(listener);
  }, [pan]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,

      onMoveShouldSetPanResponder: (_, gesture) =>
        Math.abs(gesture.dx) > 5 ||
        Math.abs(gesture.dy) > 5,

      onPanResponderMove: (_, gesture) => {
        pan.setValue({
          x: gesture.dx,
          y: gesture.dy,
        });
      },

      onPanResponderRelease: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          friction: 3,
          tension: 60,
          useNativeDriver: false,
        }).start();
      },

      onPanResponderTerminate: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          friction: 3,
          tension: 60,
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  return (
    <View
      style={[
        styles.section,
        {
          width: isDesktop ? undefined : "100%",
          flex: isDesktop ? 1 : undefined,
        },
      ]}
    >
      <View
        style={[
          styles.stage,
          {
            width: cardWidth,
            height: stageHeight,
          },
        ]}
      >
        {/* TALI ID CARD */}
        <Svg
          pointerEvents="none"
          width={cardWidth}
          height={stageHeight}
          style={styles.rope}
        >
          <Line
            x1={cardWidth / 2}
            y1={0}
            x2={cardWidth / 2 + drag.x}
            y2={lanyardBase + drag.y}
            stroke={ACCENT}
            strokeWidth={4}
            strokeLinecap="round"
          />
        </Svg>

        {/* ID CARD */}
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.card,
            {
              width: cardWidth,
              height: cardHeight,
              top: lanyardBase,
              transform: [
                { translateX: pan.x },
                { translateY: pan.y },
              ],
            },
          ]}
        >
          {/* KLIP */}
          <View style={styles.clip}>
            <View style={styles.clipInner} />
          </View>

          {/* HEADER */}
          <View style={styles.cardTop}>
            <View style={styles.statusDot} />

            <Text style={styles.headerText}>
              DIGITAL ID // SECURE
            </Text>

            <Text style={styles.version}>{profile.version}</Text>
          </View>

          {/* FOTO PROFIL */}
          <View style={styles.photoContainer}>
            <View style={styles.photoBorder}>
              <Image
                source={profile.photo}
                style={styles.photo}
                resizeMode="cover"
              />
            </View>

            <View style={styles.photoCornerTL} />
            <View style={styles.photoCornerBR} />
          </View>

          {/* NAMA */}
          <Text
            style={[
              styles.name,
              { fontSize: width < 400 ? 16 : 18 },
            ]}
          >
            {profile.name}
          </Text>

          <Text style={styles.profession}>
            {profile.profession}
          </Text>

          <View style={styles.divider} />

          {/* NOMOR MAHASISWA */}
          <Text style={styles.nimLabel}>
            STUDENT ID NUMBER
          </Text>

          <Text style={styles.nim}>
            {profile.nim}
          </Text>

          {/* BARCODE */}
          <View style={styles.barcode}>
            {[
              3, 2, 5, 2, 4,
              3, 2, 5, 3, 2,
              4, 2, 5, 3, 2,
            ].map((item, index) => (
              <View
                key={index}
                style={[
                  styles.barcodeLine,
                  { width: item },
                ]}
              />
            ))}
          </View>

          {/* FOOTER */}
          <View style={styles.cardFooter}>
            <View>
              <Text style={styles.footerLabel}>
                UNIVERSITY
              </Text>

              <Text style={styles.footerText}>
                {profile.university}
              </Text>
            </View>

            <View style={styles.footerStatus}>
              <View style={styles.statusDot} />

              <Text style={styles.activeText}>
                {profile.status}
              </Text>
            </View>
          </View>
        </Animated.View>
      </View>
    </View>
  );
}
