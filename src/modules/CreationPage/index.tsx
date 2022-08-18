import classNames from "classnames";
import useNFTMarket from "state/nft-market";
import useSingner from "state/signer";
import CreationForm, { CreationValues } from "./CreationForm";

const CreationPage = () => {
  const {signer} = useSingner();
  const {createNFT}= useNFTMarket();

  // const onSubmit = async (values: CreationValues) => {
  //   // TODO: create NFT
  //   console.log(values)
  // };

  return (
    <div
      className={classNames("flex h-full w-full flex-col", {
        "items-center justify-center": !signer,
      })}
    >
      {signer ? <CreationForm onSubmit={createNFT} /> : "Connect your wallet"}
    </div>
  );
};

export default CreationPage;
