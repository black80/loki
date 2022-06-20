import { FastifyInstance } from 'fastify';
import configureCARoute from './configure-CA';
import enablePKIRoutes from './enable-pki';
import generateRootCertRoute from './generate-root-cert';
import tunePKIRoutes from './tune-pki';


export default async function RegisterRootCRTRoutes(fastify: FastifyInstance, _: {}) {
    await fastify.register(enablePKIRoutes);
    await fastify.register(tunePKIRoutes);
    await fastify.register(generateRootCertRoute)
    await fastify.register(configureCARoute);
}