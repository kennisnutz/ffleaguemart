import {gql, useQuery} from "@apollo/client";
import { ethers } from "ethers";
import { DeflateRaw } from "zlib";
import useSingner from "../signer";
import { parseListedRawNFT } from "./helpers";

import { GetOwnedListedNFTs, GetOwnedListedNFTsVariables, GetOwnedListedNFTs_nfts } from "./__generated__/GetOwnedListedNFTs";
import { NFT_MARKET_ADDRESS} from './config';

const useOwnedListedNFTs= ()=>{
    const {address} = useSingner();
    const {data}= useQuery<GetOwnedListedNFTs, GetOwnedListedNFTsVariables>(
        GET_OWNED_LISTED_NFTS,
        {variables: {owner: address }, skip: !address}         
        );
        const ownedListedNFTs = data?.nfts.map(parseListedRawNFT);

        return {ownedListedNFTs};
}




const GET_OWNED_LISTED_NFTS = gql`
    query GetOwnedListedNFTs($owner: String){
        nfts(
            where:{
                to:"${NFT_MARKET_ADDRESS}", 
                from:$owner
            }
        ) {
            id
            from
            to
            tokenURI
            price
        }
    }
`

export default useOwnedListedNFTs;