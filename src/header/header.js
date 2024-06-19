import React from 'react';
import { Flex, IconButton, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link as ReactRouterLink } from 'react-router-dom';

function Header({ title }) {
    return (
        <Flex h="3rem" bg="gray.100" pl="1rem" pr="1rem" left="3rem" top="0" right="0" position="fixed" direction="row">
            <Heading fontSize="1.25rem" display="flex" alignItems="center">
                <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={ReactRouterLink} to={'/'}>
                            Boilerplate
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink isCurrentPage>{title}</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Heading>
            <IconButton height="3rem" width="3rem" rounded="0" icon="at-sign" ml="auto" aria-label={''} />
        </Flex>
    );
}

export default Header;
