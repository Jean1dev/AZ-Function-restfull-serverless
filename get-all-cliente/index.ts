import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { TABELA_CLIENTE } from '../shared/contants';
import { findAll } from '../shared/cosmos'

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const registros = await findAll(TABELA_CLIENTE, {
        query: `SELECT * FROM ${TABELA_CLIENTE} c`
    })

    context.res = {
        body: registros
    };

};

export default httpTrigger;
