import { Stack } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Text, Image, YStack, XStack } from 'tamagui'

interface Item {
  id?: String
  name: string
  quantity: number
  image?: string
}

const URL_BASE = 'https://baco-api.up.railway.app/'

export default function Login() {
  const [itemsList, setItemsList] = useState<Item[]>([
    { id: '1', name: 'Koala', quantity: 0, image: 'https://github.com/devkoalaa.png' },
  ])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      const data: Item = await fetch(`${URL_BASE}items`).then(async (response) => {
        return await response.json()
      })

      // const newData = JSON.parse(JSON.stringify(data, ['id', 'name', 'quantity', 'image']))
      // console.log('RESPONSE -> ', newData)

      return data
    } catch (erro) {
      console.log('erro -> ', erro)
      return erro
    }

    // const response: any = await fetch(`${URL_BASE}items`).then((e: any) => {
    //   return e.data
    // })

    // console.log('RESPONSE -> ', response)

    // return response
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Login',
        }}
      />
      <ScrollView>
        {itemsList &&
          itemsList.map((item: Item, index: number) => (
            <YStack key={index} p="$4" marginBottom="$2" backgroundColor="$gray3" borderRadius="$4">
              <XStack jc="center">
                <Text fontWeight="bold" marginBottom="$3" alignContent="center" fontSize={'$8'}>
                  {item.name}
                </Text>
              </XStack>
              <XStack jc={'space-between'}>
                <Image
                  borderRadius="$4"
                  source={{ width: 10, height: 10, uri: item.image }}
                  width={100}
                  height={100}
                />
                <YStack jc={'center'}>
                  <Text fontSize="$10" fontWeight="bold">
                    {item.quantity}
                  </Text>
                </YStack>
              </XStack>
            </YStack>
          ))}
      </ScrollView>
    </>
  )
}
