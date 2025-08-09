import { expect, test } from '@playwright/experimental-ct-react'
import HelloWorld from './HelloWorld'

test('renders Hello World text', async ({ mount }) => {
  const component = await mount(<HelloWorld />)
  
  await expect(component).toContainText('Hello World')
})