import Instance from "./decorators/kikuri/instance/instance";
import { POST } from "./decorators/kikuri/instance/methods";
import Headers from './decorators/kikuri/instance/headers';
import Response from "./decorators/kikuri/instance/response";
import Body from './decorators/kikuri/instance/body';

@Instance('https://dummyjson.com')
@Headers({
    'Content-Type': 'application/json',
})
class きくり {

    private response: any = {};

    @POST('/posts/add')
    @Body()
    @Response() public async dummyJson(body: {}): Promise<void> {
        console.log(this.response)
    }
}

const 閻魔 = new きくり();

await 閻魔.dummyJson({
    title: '閻魔 あい',
    userId: 20,
})

export { }