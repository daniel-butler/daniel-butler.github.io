import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

// Only import rehype-mermaid during build/dev, not during tests
// (avoids playwright dependency in test environment)
const rehypeMermaid = process.env.NODE_ENV === 'test'
  ? null
  : (await import('rehype-mermaid')).default

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['jsx', 'mdx'],
  reactStrictMode: true,
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",

    // If you do not want to use blurry placeholder images, then you can set
    // nextImageExportOptimizer_generateAndUseBlurImages to false and pass
    // `placeholder="empty"` to all <ExportedImage> components.
    //
    // If nextImageExportOptimizer_generateAndUseBlurImages is false and you
    // forget to set `placeholder="empty"`, you'll see 404 errors for the missing
    // placeholder images in the console.
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
  },
  experimental: {
    scrollRestoration: true,
  },
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};


const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    // Filter out null plugins (e.g., rehypeMermaid during tests)
    rehypePlugins: [rehypeMermaid, rehypeHighlight].filter(Boolean),
  },
})

export default withMDX(nextConfig)
