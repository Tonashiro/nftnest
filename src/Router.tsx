import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const HomePage = lazy(() =>
  import("./pages/Home/HomePage").then((module) => {
    return { default: module.HomePage };
  })
);

const Router = (): JSX.Element => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nfts" element={<h1>My NFTS</h1>} />
        <Route path="/create-contract" element={<h1>Create Contract</h1>} />
        <Route path="/create-nft" element={<h1>Upload NFT</h1>} />
        <Route path="/mint" element={<h1>Mint NFT</h1>} />
        <Route path="/update-nft" element={<h1>Update NFT</h1>} />
        <Route path="/transfer-nft" element={<h1>Transfer NFT</h1>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};
export { Router };
