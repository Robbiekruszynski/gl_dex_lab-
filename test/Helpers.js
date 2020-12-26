export const tokens = (n) => {
    //web3 big Num lib
    return new web3.utils.BN(
    web3.utils.toWei(n.toString(), 'ether')
    )

}