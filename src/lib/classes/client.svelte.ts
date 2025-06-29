import { prisma } from '$lib/prisma';
import { type Client as ClientDB } from '../../generated/prisma/client';
export default class Client {
    #clients: ClientDB[];

    constructor() {
        this.#clients = $state([]);
    }

    async loadInvoices() {
        const result = await prisma.client.findMany();
        this.#clients = result;
    }

    get clients() {
        return this.#clients;
    }

    async getById(id: string) {
        const result = await prisma.invoice.findUnique({ where: { id } });
        if (!result) {
            return;
        }
        
        return result;
    }

    /**
     * @abstract create or edit a Invoice
     * @param invoice
     * @returns the invoice or the result of creating one
     */
    async upsertInvoice(client: Omit<ClientDB, 'id'> | ClientDB) {
        try {
            const result = await prisma.client.upsert({
                where: { id: Object.hasOwn(client, 'id') ? client.id : '' },
                update: client,
                create: client
            });

            /** add the newly created result to state */
            if (!this.#clients.find(c => c.id === result.id)) {
                this.#clients.push(result)
            }
            return result;
        } catch (err) {
            console.error(err);
            return client;
        }
    }
}
