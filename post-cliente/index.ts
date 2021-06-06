import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { TABELA_CLIENTE } from '../shared/contants';
import { create } from '../shared/cosmos'
import Cliente from '../shared/model/cliente/Cliente';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const body = req.body
    const cliente = new Cliente(
        body.nome,
        body.cep,
        body.email,
        body.observacao
    )

    const idCliente = await create(TABELA_CLIENTE, cliente)
    context.res = {
        body: idCliente
    }
};

export default httpTrigger;
