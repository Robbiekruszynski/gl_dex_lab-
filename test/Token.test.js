const { result } = require('lodash')

const Token = artifacts.require("./Token")

require('chai')
.use(require("chai-as-promised"))
.should()

contract('Token', (accounts) => {
    const name ='Yog'
    const symbol = 'YOG'
    const decimals = '18'
    const totalSupply = '1000000000000000000000000'
    let token

    //fetch token this allows us to call and chec on token whenever we want to without having to run it each time we run truffle test 
    beforeEach (async () => {
        token = await Token.new()
    })

    describe('deployment', () => {
        it('tracks the name', async () => {
            //read token name 
            const result = await token.name()
            //token name is "gl"
            result.should.equal(name)
        })

        it('tracks the symbol', async() => {
            const result = await token.symbol()
            result.should.equal(symbol)
        })

        it('tracks the decimals', async() => {
            const result = await token.decimals()
            result.toString().should.equal(decimals)
        })

        it ('tracks the total supply', async() => {
            const result = await token.totalSupply()
            result.toString().should.equal(totalSupply)
        })
    })
})