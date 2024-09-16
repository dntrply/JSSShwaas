import React from 'react';
import Disclaimer from '../../components/Disclaimer';
import { BackHandler } from 'react-native';
import { router, useRouter } from 'expo-router'; // Import the useRouter hook

const DisclaimerScreen: React.FC = () => {
  const routerX = useRouter(); // Get the router object

  return (
    <Disclaimer
      onCancel={() => BackHandler.exitApp()}
      onAccept={() => {
        router.push('/'); // Navigate to the Questionnaire screen
        router.push('/Questionnaire'); // Navigate to the Questionnaire screen
}}
    />
  );
};

export default DisclaimerScreen;