import React from 'react';
import * as ReactDOM from 'react-dom/client';
import client from './client';
import { ApolloProvider } from '@apollo/client';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Navigation from './navigation/navigation';
import Header from './header/header';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Tenants from './tenant/tenants';

import { tableAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.querySelector('#root'));

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tableAnatomy.keys);

const xl = defineStyle({
    fontSize: '14px',
    fontWeight: 'normal',
    px: '4',
    h: '12',
});

const thead = defineStyle({
    backgroundColor: 'gray.100',

    th: {
        color: 'gray.600',
        fontSize: '14px',
        fontWeight: 'bold',
        px: '4',
        py: '2',
        h: '12',
    },
});

const tfoot = defineStyle({
    th: {
        fontWeight: 'bold',
        textTransform: 'none',
        letterSpacing: 'normal',
        fontSize: '14px',
        px: '4',
        h: '12',
    },
});

const sizes = {
    xl: definePartsStyle({ thead, td: xl, caption: xl, tfoot }),
};

// keys: ("table" | "thead" | "tbody" | "tr" | "th" | "td" | "tfoot" | "caption")[];

export const tableTheme = defineMultiStyleConfig({ sizes });
export const theme = extendTheme({
    components: { Table: tableTheme },
});

root.render(
    <ChakraProvider theme={theme}>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <Routes>
                    <Route path="/" element={<TenantLayout />}>
                        <Route index element={<Tenants />} />
                    </Route>
                    <Route path="tenant/:tenant/*" element={<Layout title={'Home'} />}>
                        {/*  TODO  */}
                    </Route>
                </Routes>
            </ApolloProvider>
        </BrowserRouter>
    </ChakraProvider>,
);

function Layout({ title }) {
    return (
        <Box color="gray.600" w="full">
            <Navigation select={title} />
            <Header title={title} />
            <Box ml="2rem" mt="3rem">
                <Outlet />
            </Box>
        </Box>
    );
}

function TenantLayout({ title }) {
    return (
        <Box color="gray.600" w="full">
            <Navigation select={title} showPages={false} />
            <Header title={title} />
            <Box className="Content" ml="3rem" mt="3rem" p="1rem">
                <Outlet />
            </Box>
        </Box>
    );
}
