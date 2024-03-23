/** @type {import('next').NextConfig} */
const nextConfig = {
    // images: {
    //   remotePatterns: [
    //     {
    //       protocol: "https",
    //       hostname: "images.unsplash.com",
    //       port: '',
    //       pathname: '/*',          
    //     },
    //     {
    //       protocol: "https",
    //       hostname: "readymadeui.com",
    //       port: '',
    //     },
    //   ],
    // },
    images:{
      domains : [
        "images.unsplash.com","readymadeui.com"
      ],
    }
  };
  
  export default nextConfig;
