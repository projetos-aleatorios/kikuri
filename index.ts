import Instance from "./decorators/kikuri/instance/instance";
import { GET } from "./decorators/kikuri/instance/methods";
import Headers from './decorators/kikuri/instance/headers';
import Response from "./decorators/kikuri/instance/response";
import Query from './decorators/kikuri/instance/query';
import Param from './decorators/kikuri/instance/parameters';

type Nickname = {
    code: number;
    message: string;
    user: User
}

type User = {
    userNum: number;
    nickname: string;
}

enum matchingMode {
    'LUMIA' = 2,
    'RANKED' = 3,
    'COBALT' = 6
}

type FreeWeek = {
    code: number;
    message: string;
    freeCharacters: Array<number>;
}


@Instance('https://open-api.bser.io/v1')
@Headers({
    'Content-Type': 'application/json',
    'x-api-key': Bun.env.TOKEN || '',
})
class きくり {

    private response: any = {};

    @GET('/user/nickname')
    @Query('query')
    @Response()
    public async playerName(nickname: string): Promise<Nickname> {
        const response: Nickname = this.response;
        console.log('-- User -- \n %o', response.user)
        return response;
    }

    @GET('/freeCharacters')
    @Param('/')
    @Response()
    public async freeWeek(matchingMode: matchingMode): Promise<FreeWeek> {
        const response: FreeWeek = this.response;
        console.log('-- FreeWeek -- \n %s', response.freeCharacters)
        console.log(response.freeCharacters);
        return response;
    }
}

const 閻魔 = new きくり();
await 閻魔.playerName('nica')
console.log('-----------------------------------------------------------------')
await 閻魔.freeWeek(matchingMode.LUMIA)

export { }