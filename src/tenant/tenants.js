import React from 'react';
import { Text, Heading, Stack, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { getTenants } from './tenant.gql';

function Tenant({ tenant, title, description }) {
    return (
        <Card w={200} as={ReactRouterLink} to={`/tenant/${tenant}`}>
            <CardHeader>
                <Heading size="md">{title}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{description}</Text>
            </CardBody>
        </Card>
    );
}

function Tenants() {
    const { loading, error, data, subscribeToMore } = useQuery(getTenants, {
        variables: {},
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    if (!data || !data.tenants) {
        return <div>No.</div>;
    }

    return (
        <Stack spacing={8} direction="row">
            {data.tenants.map((tenant) => {
                return (
                    <Tenant key={tenant.id} tenant={tenant.id} title={tenant.title} description={tenant.description} />
                );
            })}
        </Stack>
    );
}

export default Tenants;
