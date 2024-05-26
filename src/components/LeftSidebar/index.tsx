import { Box, VStack, Heading, useColorModeValue, Switch } from '@chakra-ui/react';
import { useGetInputStates } from 'hooks/useGetInputStates';
import InputForm from './formComponents/InputForm';
import TextareaForm from './formComponents/TextareaForm';
import FadeIn from 'components/common/Transitions/FadeIn';
import HoverPopup from 'lib/HoverPopup';
import { useLabelHelpers } from 'hooks/useLabelHelpers';
import MetaImg from './formComponents/MetaImg';
import CleanInputsBtn from 'components/MetaTagsModal/MetaTagsSection/MetaTagsHeader/CleanInputsBtn';

export default function LeftSidebar() {
  const { descriptionTextarea, setDescriptionTextarea, titleInput, setTitleInput, author, setAuthor, ogUrl, setOgUrl } =
    useGetInputStates();

  const { setCapitalizedText, capitalizedText } = useLabelHelpers();

  return (
    <Box as="section" borderRight="1px solid" p="1rem" borderColor={useColorModeValue('border.100', 'gray.700')}>
      <FadeIn>
        <Heading as="h2" fontSize="1rem" mb="1rem" display="flex" justifyContent="space-between">
         Website Metadata
          <CleanInputsBtn iconColor="white" />
        </Heading>
        <MetaImg />
        <VStack as="form" spacing="1.2rem">
          <InputForm
            inputId="titleInput"
            labelValue="Title"
            placeholder="SEO Tag Forge"
            value={titleInput}
            required
            infoTxt="title of the page"
            state={titleInput}
            setState={setTitleInput}
          >
            <HoverPopup text="Text Capitalized" width="105px" textSize="0.65rem" top="20px">
              <Switch
                size="md"
                colorScheme={useColorModeValue('blue', 'teal')}
                onChange={() => setCapitalizedText((prevState: boolean) => !prevState)}
                isChecked={capitalizedText}
                cursor="default"
              />
            </HoverPopup>
          </InputForm>
          <InputForm
            inputId="ogUrl"
            value={ogUrl}
            placeholder="www.example.com"
            infoTxt="open graph url" 
            state={ogUrl}
            setState={setOgUrl}
            labelValue="Url"
            required
          />
          <TextareaForm
            labelValue="Description"
            placeholder="effortlessly optimize your website's SEO with tailored tags using this intuitive tag generation tool."
            required
            resize="none"
            infoTxt="description of the page"
            textareaId="descriptionTextarea"
            state={descriptionTextarea}
            setState={setDescriptionTextarea}
          />
          <InputForm
            inputId="author"
            value={author}
            labelValue="Author"
            placeholder="Web Developer"
            infoTxt="author of the page"
            state={author}
            setState={setAuthor}
          />
        </VStack>
      </FadeIn>
    </Box>
  );
}
