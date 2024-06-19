import React from 'react';
import { Flex, IconButton } from '@chakra-ui/react';
import { Link as ReactRouterLink, useParams } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';

function Navigation({ select, showPages = true }) {
    const { tenant } = useParams();
    let pages = [
        {
            title: 'Home',
            to: '/',
            icon: <StarIcon />,
            color: 'white',
            bg: 'black',
        },
    ];

    if (showPages) {
        pages = [...pages];
    }

    return (
        <Flex w="3rem" bg="gray.200" left="0" top="0" bottom="0" position="fixed" direction="column">
            {pages.map((page) => {
                const isSelect = select === page.title;
                return (
                    <IconButton
                        key={page.title}
                        as={ReactRouterLink}
                        to={page.to}
                        height="3rem"
                        width="3rem"
                        rounded="0"
                        icon={page.icon}
                        color={isSelect ? 'white' : page.color}
                        bg={isSelect ? 'purple.600' : page.bg}
                        _hover={{ bg: 'purple.600', color: 'white' }}
                        aria-label={page.title}
                        title={page.title}
                    />
                );
            })}
        </Flex>
    );
}

export default Navigation;
