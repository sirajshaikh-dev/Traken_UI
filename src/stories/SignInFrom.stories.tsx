import { SignInForm } from '@/components/Authentication/SigninForm';
import type { Meta, StoryObj } from '@storybook/react';

import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Authentication/SignInForm',
  component: SignInForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialRemember: {
      control: 'boolean',
      description: 'Initial state of remember me checkbox'
    },
    onSignIn: { action: 'signIn' },
    onGoogleSignIn: { action: 'googleSignIn' },
    onGithubSignIn: { action: 'githubSignIn' },
    onSignUp: { action: 'signUp' },
    onPasswordReset: { action: 'passwordReset' }
  },
  args: {
    onSignIn: fn(),
    onGoogleSignIn: fn(),
    onGithubSignIn: fn(),
    onSignUp: fn(),
    onPasswordReset: fn()
  },
} satisfies Meta<typeof SignInForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const RememberMeChecked: Story = {
  args: {
    initialRemember: true
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