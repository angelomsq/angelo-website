import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Button, { ButtonProps } from '@/components/Button'

test('Button renders correctly', () => {
  const props: ButtonProps = {
    sys: { id: 1 },
    title: 'Button 1',
    heading: '',
    description: '',
    label: 'Test Button',
    url: '/test',
    external: false,
    style: 'primary',
    download: {
      url: '',
    },
  }

  render(<Button {...props} />)

  const button = within(screen.getByText('Test Button'))

  expect(button).toBeDefined()
  // expect(button).toHaveProperty('class', 'btn btn-primary')
})
