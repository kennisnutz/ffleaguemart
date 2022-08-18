import {gql, useQuery} from "@apollo/client";
import { ethers } from "ethers";
import { DeflateRaw } from "zlib";
import useSingner from "../signer";
import { parseListedRawNFT } from "./helpers";

import { GetListedNFTs, GetListedNFTsVariables } from "./__generated__/GetListedNFTs";
import { NFT_MARKET_ADDRESS} from './config';

const useListedNFTs= ()=>{
    const {address} = useSingner();
    const {data}= useQuery<GetListedNFTs, GetListedNFTsVariables>(
        GET_LISTED_NFTS,
        {variables: {currentAddress: address }, skip: !address}         
        );
        const listedNFTs = data?.nfts.map(parseListedRawNFT);

        return {listedNFTs};
}




const GET_LISTED_NFTS = gql`
    query GetListedNFTs($currentAddress: String){
        nfts(
            where:{
                to:"${NFT_MARKET_ADDRESS}", 
                from_not:$currentAddress
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

export default useListedNFTs;