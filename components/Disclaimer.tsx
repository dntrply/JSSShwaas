import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { t } from '../src/messages';
import HandShow from '../assets/images/handShow.svg';
// import LocalStorage from '../LocalStorage';
import colors from '../constants/portcolors';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: colors.primary,
    fontSize: 45,
    textAlign: 'center',
  },
});

interface DisclaimerProps {
  onCancel: () => void;
  onAccept: () => void;
}

const Disclaimer: React.FC<DisclaimerProps> = ({ onCancel, onAccept }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, margin: 20 }}>
      <Text style={styles.title}>{t('title')}</Text>
      <View style={{ marginTop: 10, marginBottom: 50 }}>
        <HandShow height={height * 0.3} width={width * 0.9} />
      </View>
      <Text style={{ fontWeight: 'bold' }}>{t('disclaimer-part-1')}</Text>
      <Text style={{ marginTop: 10 }}>{t('disclaimer-part-2')}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <Button mode="outlined" onPress={onCancel}>
            {t('cancel')}
          </Button>
          <Button mode="contained" onPress={onAccept}>
            {t('accept')}
          </Button>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default Disclaimer;