import NextLink from 'next/link';
import { Flex, Heading, Text, Link, Image } from '@chakra-ui/react';

export default function Logo() {
  return (
    <NextLink href="/" passHref>
      <Link display="flex" alignItems="center" gridGap="0.3rem" _hover={{ textDecoration: 'none' }}>
        <Image
          src="https://api.iconify.design/simple-icons:jrgroup.svg?color=%235e30eb" 
          alt="SEO Creator Logo"
          boxSize="2rem"
          objectFit="contain"
          transition="0.25s ease-out"
          _hover={{ transform: 'scale(1.1)' }} 
        />
        <Heading as="h1" size="md" userSelect="none">
          SEO CREATOR
        </Heading>
      </Link>
    </NextLink>
  );
}


