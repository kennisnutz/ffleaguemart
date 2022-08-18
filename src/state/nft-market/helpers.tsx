import { NFT } from "./interfaces";
import { GetOwnedListedNFTs_nfts } from "./__generated__/GetOwnedListedNFTs";
import { ethers } from "ethers";

export const parseListedRawNFT= (raw: GetOwnedListedNFTs_nfts): NFT =>{
    return {
        id: raw.id,
        owner: raw.price == '0' ? raw.to : raw.from,
        price: raw.price== '0'? '0':ethers.utils.formatEther(raw.price),
        tokenURI: raw.tokenURI,
    }
    }

 //export const parseRawNFT= (raw: GetOwnedNFTs_nfts): NFT =>{
//     return {
//         id: raw.id,
//         owner: raw.price == '0' ? raw.to : raw.from,
//         price: raw.price== '0'? '0':ethers.utils.formatEther(raw.price),
//         tokenURI: raw.tokenURI,
//     }
//     }