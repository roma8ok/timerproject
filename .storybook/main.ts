// @ts-ignore
module.exports = {
  stories: [
    '../src/components/**/*.stories.@(tsx|mdx)',
    '../src/layouts/**/*.stories.@(tsx|mdx)',
    '../src/views/**/*.stories.@(tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/preset-typescript',
  ],
};
