import { Stack } from "expo-router";
import { store } from '../src/store';
import { Provider } from 'react-redux';


export default function RootLayout() {
  return (
    <Provider store={store}>
    <Stack>
      <Stack.Screen name="(tabs)" options={{
        headerShown: false,
      }}/>
    </Stack>
    </Provider>
  );
}
