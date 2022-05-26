const projectConfig = {
  nftName: 'Wonstar',

  siteDomain:
    process.env.NEXT_PUBLIC_APP_ENV === 'production'
      ? 'wonstar.xyz'
      : process.env.NEXT_PUBLIC_APP_ENV === 'staging'
      ? 'testnet.wonstar.xyz'
      : 'localhost:3000',

  siteUrl:
    process.env.NEXT_PUBLIC_APP_ENV === 'production'
      ? 'https://wonstar.xyz'
      : process.env.NEXT_PUBLIC_APP_ENV === 'staging'
      ? 'https://testnet.wonstar.xyz'
      : 'http://localhost:3000',

  siteDescription: 'Wonstar is the NFT game of exciting battle system with earning.',

  ogImagePath: '/image/logo.png',

  twitterUsername: '@0xWonstar',

  twitterUrl: 'https://twitter.com/0xWonstar',

  githubUrl: 'https://github.com/sakimyto/Wonstar',

  discordUrl: 'https://discord.gg/WdsSy7Bu',
};

export default projectConfig;
