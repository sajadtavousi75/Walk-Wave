/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir: true,
        missingSuspenseWithCSRBailout: false,
    },
    images: {
       domains:['walkwave-project.liara.run']
      },
};

export default nextConfig;
