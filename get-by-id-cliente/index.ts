import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { TABELA_CLIENTE } from '../shared/contants';
import { findOne } from '../shared/cosmos'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const idDocumento = req.query.idDocumento
    const documento = await findOne(TABELA_CLIENTE, idDocumento)

    context.res = {
        body: documento.resource
    };

};

export default httpTrigger;
