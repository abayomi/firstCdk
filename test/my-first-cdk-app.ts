import { handler } from "../src";

describe('My First CDK App Tests', ()=> {
    it('return name and test', async () =>{
        const output = await handler({ name : 'Faruk'});
        expect(output).toStrictEqual('Good Job Faruk')
    })
    it('return no name and test', async () =>{
        const output = await handler({ name : ''});
        expect(output).toStrictEqual('Good Job')
    })
});