/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is the CRITICAL setting for static deployment to S3/CloudFront.
  output: 'export',

  // Optional: Tells Next.js to skip image optimization since it requires a server (which S3 does not provide).
  // If you use next/image, you will need to configure a custom image loader (like one for an external CDN).
  images: {
    unoptimized: true,
  },
  
  // The 'export' output mode defaults to the 'out' directory.
  // CodeBuild will package the contents of this directory.
};

module.exports = nextConfig;