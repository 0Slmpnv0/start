{
    test: /\.(png|jpe?g|gif)$/i,
    type: 'asset/resource',
  },
  {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'], // вот здесь подключаем SVGR
  },