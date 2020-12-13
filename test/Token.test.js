const Token = artifacts.require("./Token")

require('chai')
.use(require("chai-as-promised"))
.should()

contract('Token', (accounts) => {

    describe('deployment', () => {
        it('tracks the name', async () => {
            //fetch token
           const token =  await Token.new()
            //read token name 
            const result =await token.name()
            //token name is "gl"
            result.should.equal("gl")
        })
    })
})