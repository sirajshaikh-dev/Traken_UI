import { SignUpForm } from '@/components/Authentication/SignupForm';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Authentication/SignUpForm',
  component: SignUpForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialName: {
      control: 'text',
      description: 'Initial value for name field'
    },
    onSignUp: { action: 'signUp' },
    onGoogleSignIn: { action: 'googleSignIn' },
    onGithubSignIn: { action: 'githubSignIn' },
    onSignIn: { action: 'signIn' }
  },
  args: {
    onSignUp: fn(),
    onGoogleSignIn: fn(),
    onGithubSignIn: fn(),
    onSignIn: fn()
  },
} satisfies Meta<typeof SignUpForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const WithInitialName: Story = {
  args: {
    initialName: 'John Doe'
  }
};

export const DarkMode: Story = {
  args: {},
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};