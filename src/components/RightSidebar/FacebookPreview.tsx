import PreviewTittle from './PreviewTittle';
import { Box, Img, Text, useColorModeValue } from '@chakra-ui/react';
import { useGetInputStates } from 'hooks/useGetInputStates';
import { useLabelHelpers } from 'hooks/useLabelHelpers';
import FadeIn from "components/common/Transitions/FadeIn"

export default function FacebookPreview() {
  const { titleInput, descriptionTextarea, author, ogUrl } = useGetInputStates();
  const { capitalizedText } = useLabelHelpers();

  return (
    <FadeIn>
      <PreviewTittle title="Facebook" />
      <Box m="0.5rem 0 1.5rem" maxW="400px" mt="0.5rem" cursor="default" borderRadius="2px">
        <Img
          display="block"
          borderRadius="2px 2px 0 0"
          border="1px solid"
          borderColor={useColorModeValue('border.100', 'gray.400')}
          src="https://firebasestorage.googleapis.com/v0/b/svelte-forever.appspot.com/o/facebook.svg?alt=media&token=1e2b6ed7-f250-46fe-928b-fa71c55608d5&auto=format&fit=crop&w=870&q=80"
        />
        <Box
          bg={useColorModeValue('gray.100', 'gray.300')}
          borderRadius="0 0 2px 2px"
          p="0.4rem 0.8rem"
          border="1px solid"
          borderColor="border.100"
        >
          <Text textTransform="uppercase" fontSize="0.8rem" color="gray.600" fontWeight="normal">
            {ogUrl.trim().length > 1 ? `${ogUrl}`.trimStart().trimEnd() : 'seo-generator.vercel.app'}
          </Text>
          <Text textTransform={capitalizedText ? 'capitalize' : 'none'} fontWeight="semibold" color="gray.900">
            {titleInput.trim().length > 1 ? titleInput : 'Seo Creator- Create, Edit, and Deploy your SEO'}
          </Text>
          <Text color="#606770" fontSize="0.9rem">
            {descriptionTextarea.trim().length > 1 ? descriptionTextarea : 'description of the website.'}
          </Text>
        </Box>
      </Box>
    </FadeIn>
  );
}
