import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { TABELA_CLIENTE } from '../shared/contants';
import { deleteById } from '../shared/cosmos'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const idDocumento = req.query.idDocumento
    context.log(idDocumento)
    await deleteById(TABELA_CLIENTE, idDocumento)

    context.res = {
        status: 204
    }
};

export default httpTrigger;
