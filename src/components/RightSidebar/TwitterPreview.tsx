import { useState } from 'react';
import PreviewTittle from './PreviewTittle';
import { Box, Img, Text, useColorModeValue } from '@chakra-ui/react';
import { useGetInputStates } from 'hooks/useGetInputStates';
import { useLabelHelpers } from 'hooks/useLabelHelpers';
import FadeIn from "components/common/Transitions/FadeIn"

export default function TwitterPreview() {
  const [hover, setHover] = useState<boolean>(false);
  const { titleInput, descriptionTextarea, ogUrl } = useGetInputStates();
  const { capitalizedText } = useLabelHelpers();

  return (
    <FadeIn>
      <PreviewTittle title="Twitter" />
      <Box
        m="0.5rem 0 1rem"
        maxW="400px"
        mt="0.5rem"
        cursor="default"
        borderRadius="7px"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Img
          display="block"
          border="1px solid"
          borderColor={hover ? 'fill.300' : 'border.100'}
          borderRadius="7px 7px 0 0"
          src="https://firebasestorage.googleapis.com/v0/b/svelte-forever.appspot.com/o/trace-2.svg?alt=media&token=30c5c63f-cf92-4721-a8cd-376a5548b960&auto=format&fit=crop&w=870&q=80"
        />
        <Box
          bg={useColorModeValue('white', 'gray.300')}
          p="0.4rem 0.8rem"
          border="1px solid"
          borderTop="none"
          borderColor={hover ? 'fill.300' : 'border.100'}
          transition="0.1s ease"
          borderRadius="0 0 7px 7px"
          _hover={{ background: useColorModeValue('gray.100', 'gray.200') }}
        >
          <Text
            fontWeight="semibold"
            fontSize="0.8rem"
            color="gray.900"
            textTransform={capitalizedText ? 'capitalize' : 'none'}
          >
            {titleInput.trim().length > 1 ? titleInput : 'Seo Creator - create, edit and deploy your seo'}
          </Text>
          <Text color="#606770" fontSize="0.9rem">
            {descriptionTextarea.trim().length > 1 ? descriptionTextarea : 'seo cretor tool writen in typescript'}
          </Text>
          <Text textTransform="lowercase" fontSize="0.8rem" fontWeight="normal" color="gray.600">
            {ogUrl.trim().length > 1 ? `${ogUrl}`.trimStart().trimEnd() : 'seo-creator.vercel.app'}
          </Text>
        </Box>
      </Box>
    </FadeIn>
  );
}
