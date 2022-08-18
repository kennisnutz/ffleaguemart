import NFTCard from "components/NFTCard";
import useNFTMarket from "../../state/nft-market";

const OwnedPage = () => {
  const {ownedNFTs, ownedListedNFTs}= useNFTMarket();

  console.log("owned :",ownedNFTs)
  console.log("owned listed :",ownedListedNFTs)
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-wrap">
      {
        ownedNFTs?.map(nft=> <NFTCard nft={nft} className="mr-2 mb-2" key={nft.id}/>)
      }
      </div>
      {
        ownedListedNFTs && (
          <>
           <div className="mu-4 mt-4 mb-6 relative h-[1px] w-full flex-shrink-0 bg-black">
           <div className="absolute right-1/2 bottom-1/2 translate-y-1/2 transform bg-white px-2 fornt-mono font-semibold">
              MY LISTED NFTS
            </div>
           </div>
          </>
        )
      }
      <div className="flex flex-wrap">
      {
        ownedListedNFTs?.map(nft=> <NFTCard nft={nft} className="mr-2 mb-2" key={nft.id}/>)
      }
      </div>
     
    </div>
  );
};

export default OwnedPage;
