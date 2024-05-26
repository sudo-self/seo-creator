import SEO from 'components/common/SEO';
import { Box } from '@chakra-ui/react';
import LeftSidebar from 'components/LeftSidebar';
import RightSidebar from 'components/RightSidebar';
import SocialSidebar from 'components/SocialSidebar';
import { useShowPreviewCtx } from 'context/ShowPreview';
import MinimalSidebar from 'components/RightSidebar/MinimalSidebar';

export default function Main() {
  const { showPreview } = useShowPreviewCtx();

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
}
