import Web3 from 'web3';
import Web3Modal from 'web3modal'
import { providerOptions } from '../providers';

const wallet = {
  webModal: async function(){
    const web3Modal = new Web3Modal({
      network: "rinkeby",
      theme: "dark",
      cacheProvider: true, 
      providerOptions: providerOptions
    });

    return web3Modal;
  },
  connect : async function(
    setAccount : any
  ){
  
    var provider = await (await this.webModal()).connect();
  
   if(provider != null){
    var web3 = new Web3(provider); 

    const accounts = await web3.eth.getAccounts();

    setAccount(accounts);
   }else{
    return null;
   }
   
  },
  desconect : async function(
    setAccount : any
  ) {
    
    window.localStorage.clear();

    setAccount("");
 }
}


export { wallet }


