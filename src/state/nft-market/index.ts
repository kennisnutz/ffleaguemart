import { BigNumber, Contract } from "ethers";
import { CreationValues } from "modules/CreationPage/CreationForm";
import useSingner from "state/signer";
import NFT_MARKET from  '../../../artifacts/contracts/FFLeagueMart.sol/FFLeagueMart.json'
import useOwnedListedNFTs from "./useOwnedListedNFTs";
import useOwnedNFTs from "./useOwnedNFTs";
import { NFT_MARKET_ADDRESS} from './config';
import { TransactionResponse } from "@ethersproject/abstract-provider";

// export const NFT_MARKET_ADDRESS= process.env.NEXT_PUBLIC_NFT_MARKET_ADDRESS as string;

const useNFTMarket=()=>{
    const {signer}= useSingner();
    const nftMarket= new Contract(NFT_MARKET_ADDRESS,NFT_MARKET.abi, signer);

    const ownedNFTs= useOwnedNFTs();
    const ownedListedNFTs= useOwnedListedNFTs();

    const createNFT=async (values: CreationValues)=>{
       try{
            const data= new FormData();
            data.append("name", values.name);
            data.append("description", values.description);
            data.append("image", values.image!);
            
            const response= await fetch('/api/nft-storage', {method: 'POST', body: data});
            if(response.status==201){
                const json= await response.json();
                console.log("tokenURI :", json.uri);
                const transaction : TransactionResponse  = await nftMarket.createNFT(json.uri);
                await transaction.wait();
       }
       
       }catch(error){
        console.log(error);
       }
    };

    const listNFT= async (tokenID:string, price: BigNumber)=>{
        const transaction: TransactionResponse= await nftMarket.listNFT(
            tokenID,
            price
        );
    }
    const cancelListing= async (tokenID:string)=>{
        const transaction: TransactionResponse= await nftMarket.cancelListing(
            tokenID,
            
        );
    }

    return {createNFT,listNFT, cancelListing, ...ownedNFTs, ...ownedListedNFTs}
};

export default useNFTMarket;