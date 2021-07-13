import { deposition_show_prereserved } from '../../../lib/deposition/show/prereserved'
import { helpers_get_access_token_from_environment } from '../../../lib/helpers/get-access-token-from-environment'
import * as commander from 'commander'



export const deposition_show_prereserved_command = () => {
    return new commander.Command()
        .name('prereserved')
        .arguments('<id>')
        .description('get the prereserved doi of the draft deposition with id <id>', {
            id: 'id of the deposition whose prereserved doi we want to retrieve'
        })
        .action(async (id, opts, self) => {
            const { sandbox, verbose } = self.parent.parent.parent.opts()
            try {
                const access_token = helpers_get_access_token_from_environment(sandbox)
                const prereserved = await deposition_show_prereserved(access_token, sandbox, id, verbose)
                console.log(prereserved)
            } catch (e) {
                console.error(e.message)
            }
        })
}
