import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, Box } from '@chakra-ui/react';
import SEO from 'components/common/SEO';
import LeftSidebar from 'components/LeftSidebar';
import RightSidebar from 'components/RightSidebar';
import SocialSidebar from 'components/SocialSidebar';
import { useShowPreviewCtx } from 'context/ShowPreview';
import MinimalSidebar from 'components/RightSidebar/MinimalSidebar';

const Main: React.FC = () => {
  const { showPreview } = useShowPreviewCtx();

  useEffect(() => {
  
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = '/favicon.ico'; 
    document.head.appendChild(link);
  }, []);

  return (
    <Box
      display="grid"
      gridTemplateColumns={{ sm: '', md: showPreview ? '250px 480px 1fr' : '250px 1fr 300px' }}
      flexDirection="column"
    >
      <SEO
        title="Seo Creator"
        description="Create, Edit, and Deploy your SEO"
      />
      <SocialSidebar />
      <LeftSidebar />
      {showPreview ? <RightSidebar /> : <MinimalSidebar />}
    </Box>
  );
};

const App: React.FC = () => (
  <ChakraProvider>
    <Main />
  </ChakraProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

