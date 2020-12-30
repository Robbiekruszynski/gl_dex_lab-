
import { tokens } from "./Helpers"
const Token = artifacts.require("./Token")

require('chai')
.use(require("chai-as-promised"))
.should()



contract('Token', ([deployer, receiver]) => { 
    const name ='Yog'
    const symbol = 'YOG'
    const decimals = '18'
    const totalSupply = tokens(1000000).toString()
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
            result.toString().should.equal(totalSupply.toString())

            //always make sure you are using the same value with Chai to check 
            //i.e. toString agaisnt toStrong (53-55 example)
    })
})
    describe('sending tokens', () => {
        let result
        let amount

        beforeEach (async () => {
            //balance transfer
            amount = tokens(100)
            result = await token.transfer(receiver,amount, {from: deployer})        })

        it("transfers token balances", async () => {
            let balanceOf
            //balance before transfer
            balanceOf = await token.balanceOf(deployer)
            balanceOf = await token.balanceOf(receiver)

            

            //after transfer
            balanceOf = await token.balanceOf(deployer)
            balanceOf.toString().should.equal(tokens(999900).toString())
            balanceOf = await token.balanceOf(receiver)
            balanceOf.toString().should.equal(tokens(100).toString())
        })

        it("emits a transfer event", async () => {
            console.log(result)
        })

        })

    })

 