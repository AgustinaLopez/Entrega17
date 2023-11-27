import chai from "chai";
import { createHash } from "../../src/utils.js";

const expect = chai.expect;

describe('', () =>{
    it('', async function(){
        //Given
        const passwordTest = "1234";

        //Then
        const result = await createHash(passwordTest);
        console.log(`Resultado: ${result}`);

        //Assert
        expect(result).not.to.be.NaN;
        expect(result).not.to.be.null;
        expect(result).not.to.be.undefined;
    })
})