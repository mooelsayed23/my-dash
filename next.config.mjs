/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          port: '',
          pathname: '/*',          
        },
        {
          protocol: "https",
          hostname: "readymadeui.com",
          port: '',
        },
      ],
    },
  };
  
  export default nextConfig;
<<<<<<< Updated upstream
  
=======
>>>>>>> Stashed changes
