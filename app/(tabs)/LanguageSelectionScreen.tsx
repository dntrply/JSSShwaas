import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import LanguageSelection from '../../components/LanguageSelection';
import {t} from '../../src/messages';
// import NavigatorUtil from '../NavigatorUtil';
import { useRouter, useLocalSearchParams} from 'expo-router';

const styles = StyleSheet.create({
  contentStyle: { width: '100%', height: 70, flexDirection: 'row-reverse' },
  containerStyle: { width: '100%', borderRadius: 0 },
});

interface RouteParams {
  localState: {
    languageSelected: string;
  };
  flow: boolean;
}

interface LanguageSelectScreenProps {
  route: {
    params: RouteParams;
  };
}


const LanguageSelectScreen: React.FC<LanguageSelectScreenProps> = ({ route }) => {

  console.log('LanguageSelectionScreen --> Entered');

  const {flow} = useLocalSearchParams();

  console.log('LanguageSelectionScreen --> flow: ', flow);
  console.log('LanguageSelectionScreen --> typeof(flow): ', typeof(flow));


  const [languageSelected, setLanguageSelected] = useState("en");

  const router = useRouter();

  const navigateToDisclaimer = () =>
    router.replace({
      pathname: 'DisclaimerScreen',
      params: { flow: "true" },
    });

  const firstTimeFlow = useLocalSearchParams().flow === 'true';
  console.log('LanguageSelectionScreen --> firstTimeFlow: ', firstTimeFlow);
  console.log('LanguageSelectionScreen --> typeof(firstTimeFlow): ', typeof(firstTimeFlow));



  return (
    <View style={{ flex: 1 }}>
      <LanguageSelection
        selectedLanguageLocale={languageSelected}
        onLanguageSelect={(locale: string) => setLanguageSelected(locale)}
      />
      <Button
        disabled={!languageSelected}
        icon={firstTimeFlow ? 'arrow-right' : undefined}
        style={styles.containerStyle}
        contentStyle={styles.contentStyle}
        labelStyle={{ fontSize: 20 }}
        mode={'contained'}
        onPress={() => {
          firstTimeFlow
            ? navigateToDisclaimer()
            : navigateToDisclaimer();
        }}
      >
        {firstTimeFlow ? t('readDisclaimer') : t('confirm')}
      </Button>
    </View>
  );
};

export default LanguageSelectScreen;
