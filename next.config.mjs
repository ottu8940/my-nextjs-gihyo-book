/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  comiler: (() => {
    let comilerConfig = {
      // styledComponentsの有効化
      styledComponents: true,
    }

    if (process.env.NODE_ENV === 'production') {
      compilerConfig = {
        ...comilerConfig,
        // 本番環境ではReact Testing Libraryで使用するdata-testid属性を削除
        reactRemoveProperties: { properties: ['^data-testid$']},
      }
    }

    return compileConfig
  })(),
};

export default nextConfig;
