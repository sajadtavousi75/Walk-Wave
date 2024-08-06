/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir: true,
    },
    output:'standalone'
    // images: {
    //     remotePatterns: [
    //       {
    //         protocol: 'http',
    //         hostname: 'localhost',
    //         port: '',
    //         pathname: '**',
    //       },
    //     ],
    //   },
};

export default nextConfig;
