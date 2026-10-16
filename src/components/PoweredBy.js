import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { C, F } from '../theme';

/**
 * "Powered by" (small) over "Nadaf Creates" (bigger). Used on the splash screen and the login page.
 * Navy text works on both the yellow splash and the cream login background.
 */
export default function PoweredBy({ style }) {
  return (
    <View style={[st.wrap, style]} pointerEvents="none">
      <Text style={st.small}>Powered by</Text>
      <Text style={st.big}>Nadaf Creates</Text>
    </View>
  );
}

const st = StyleSheet.create({
  wrap: { alignItems: 'center' },
  small: { fontFamily: F.m, fontSize: 11, letterSpacing: 1.6, color: C.primary, opacity: 0.7, textTransform: 'uppercase' },
  big: { fontFamily: F.b, fontSize: 19, letterSpacing: 0.6, color: C.primary, marginTop: 2 },
});
