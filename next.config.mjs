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
<<<<<<< HEAD
  
  export default nextConfig;
  
=======
  
  export default nextConfig;
  
>>>>>>> 3ce802f (Committing local changes)
