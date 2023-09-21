import { LoginDetailScreen } from 'app/features/login/detail-screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Login',
        }}
      />
      <LoginDetailScreen />
    </>
  )
}
