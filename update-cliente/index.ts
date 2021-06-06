import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { TABELA_CLIENTE } from '../shared/contants';
import { update } from '../shared/cosmos'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const cliente = req.body
    const id = cliente.id

    await update(TABELA_CLIENTE, id, cliente)
};

export default httpTrigger;
