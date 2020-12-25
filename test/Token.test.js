const { result } = require('lodash')

const Token = artifacts.require("./Token")

require('chai')
.use(require("chai-as-promised"))
.should()

contract('Token', ([deployer, receiver]) => {
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

        it ('assigns the total supply to the deployer', async() => {
            const result = await token.balanceOf(deployer)
            result.toString().should.equal(totalSupply)
    })
})
    describe('sending tokens', () => {
        it("transfers token balances", async () => {
            let balanceOf
            //balance before transfer
            balanceOf = await token.balanceOf(receiver)
            console.log("reciever balance before transfer", balanceOf)
            balanceOf = await token.balanceOf(deployer)
            console.log("reciever balance", balanceOf.toString())

            //transfer
            await token.transfer(receiver, "1000000000000000000", { from: deployer})

            //after transfer
            balanceOf = await token.balanceOf(receiver)
            console.log("reciever balance after transfer", balanceOf)
            balanceOf = await token.balanceOf(deployer)
            console.log("reciever balance", balanceOf.toString())
        })
    })
})


