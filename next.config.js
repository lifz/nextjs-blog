const basePath = process.env.NODE_ENV === 'production' ? '/nextjs-blog' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`
};