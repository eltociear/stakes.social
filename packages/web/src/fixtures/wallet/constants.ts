export const WEB3_PROVIDER_ENDPOINT =
  process.env.NODE_ENV === 'production'
    ? 'https://eth-mainnet.alchemyapi.io/v2/0EvZQA7WvDYf40cz476eEIh348_PcZJu' // For Production build
    : process.env.VERCEL_ENV === 'preview'
    ? 'https://eth-mainnet.alchemyapi.io/v2/ZeWhYPhzncyM-pDIyX-WuifD1Iosc06s' // For Staging
    : 'https://eth-mainnet.alchemyapi.io/v2/p56_qS-3ABDzHGg9kQ-kyqqbQVNJmzUB' // For Local Development
