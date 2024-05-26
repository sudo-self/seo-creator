import { Box, ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head'; 
import LeftSidebar from 'components/LeftSidebar';
import RightSidebar from 'components/RightSidebar';
import SocialSidebar from 'components/SocialSidebar';
import { useShowPreviewCtx } from 'context/ShowPreview';
import MinimalSidebar from 'components/RightSidebar/MinimalSidebar';

export default function Main() {
  const { showPreview } = useShowPreviewCtx();

  return (
    <ChakraProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>SEO Creator</title>
        <meta name="title" content="SEO Creator" />
        <meta name="description" content="Create, Edit, and Deploy your SEO" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seo-creator.vercel.app" />
        <meta property="og:title" content="SEO Creator" />
        <meta property="og:description" content="Create, Edit, and Deploy your SEO" />
        <meta property="og:image" content="https://seo-creator.vercel.app/icon-512.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://seo-creator.vercel.app" />
        <meta property="twitter:title" content="SEO Creator" />
        <meta property="twitter:description" content="Create, Edit, and Deploy your SEO" />
        <meta property="twitter:image" content="https://seo-creator.vercel.app/icon-512.png" />
        <meta name="author" content="sudo-self" />
      </Head>
      <Box
        display="grid"
        gridTemplateColumns={{ sm: '', md: showPreview ? '250px 480px 1fr' : '250px 1fr 300px' }}
        flexDirection="column"
      >
        <SocialSidebar />
        <LeftSidebar />
        {showPreview ? <RightSidebar /> : <MinimalSidebar />}
      </Box>
    </ChakraProvider>
  );
}
