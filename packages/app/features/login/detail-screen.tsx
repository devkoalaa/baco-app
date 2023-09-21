import { Button, Input, Paragraph, YStack } from '@my/ui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export function LoginDetailScreen() {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    console.log('username:', username)
    // console.log('password:', password)

    const data = {
      name: username,
    }

    try {
      fetch('https://baco-api.up.railway.app/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(data),
      })
    } catch (e) {
      console.log('erroroooo ->>>', e)
    }
  }

  return (
    <YStack f={1} jc="center" ai="center" space={5}>
      <Paragraph ta="center" fow="700">
        Usuário
      </Paragraph>
      <Input value={username} onChange={(e) => setUsername(e.nativeEvent.text)} />
      <Paragraph ta="center" fow="700">
        Senha
      </Paragraph>
      <Input value={password} onChange={(e) => setPassword(e.nativeEvent.text)} />
      <Button onPress={handleSubmit}>Login</Button>
    </YStack>
  )
}
