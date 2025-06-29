import { prisma } from '$lib/prisma';
import { type Invoice as InvoiceDB } from '../../generated/prisma/client';
export default class Invoice {
	#invoices: InvoiceDB[];

	constructor() {
		this.#invoices = $state([]);
	}

	async loadInvoices() {
		const result = await prisma.invoice.findMany();
		this.#invoices = result;
	}

	get invoices() {
		return this.#invoices;
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
	async upsertInvoice(invoice: Omit<InvoiceDB, 'id'> | InvoiceDB) {
		try {
			const result = await prisma.invoice.upsert({
				where: { id: Object.hasOwn(invoice, 'id') ? invoice.id : '' },
				update: invoice,
				create: invoice
			});
			if (!this.#invoices.find((i) => i.id === result.id)) {
				this.#invoices.push(result);
			}
			return result;
		} catch (err) {
			console.error(err);
			return invoice;
		}
	}
}
