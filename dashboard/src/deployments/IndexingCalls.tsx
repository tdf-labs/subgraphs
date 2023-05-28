import { styled } from "../styled";
import { NewClient } from "../utils";
import { useEffect, useMemo } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { BaseUrl } from "../constants";

const DeploymentsLayout = styled("div")`
  padding: 0;
`;

interface IndexingCallsProps {
  setIndexingStatus: any;
  setPendingIndexingStatus: any;
  indexingStatusQueries: any;
  setIndexingStatusLoaded: any;
  setIndexingStatusLoadedPending: any;
  setIndexingStatusError: any;
  setIndexingStatusErrorPending: any;
  indexingStatusLoaded: any;
  indexingStatusLoadedPending: any;
  indexingStatusError: any;
  indexingStatusErrorPending: any;
}

function _helper(query: string, client: any): [any, { data: any, error: any, loading: any }] {
  try {
    return useLazyQuery(
      gql`
      ${query}
    `,
      {
        client,
      },
    ) as [any, { data: any, error: any, loading: any }];
  } catch (err) {
    return [() => { }, { data: true, loading: false, error: null }];
  }
}

function IndexingCalls({
  setIndexingStatus,
  setPendingIndexingStatus,
  indexingStatusQueries,
  setIndexingStatusLoaded,
  setIndexingStatusLoadedPending,
  setIndexingStatusError,
  setIndexingStatusErrorPending,
  indexingStatusLoaded,
  indexingStatusLoadedPending,
  indexingStatusError,
  indexingStatusErrorPending,
}: IndexingCallsProps) {
  // const clientIndexing = useMemo(() => NewClient("https://api.thegraph.com/index-node/graphql"), []);
  const clientIndexing = useMemo(() => NewClient(`${BaseUrl}/graphql`), []);
  let currentLendingQuery = indexingStatusQueries?.lending?.fullCurrentQueryArray?.join("");
  let currentDexAmmQuery = indexingStatusQueries?.exchanges?.fullCurrentQueryArray?.join("");
  let currentYieldAggQuery = indexingStatusQueries?.vaults?.fullCurrentQueryArray?.join("");
  let currentGenericQuery = indexingStatusQueries?.generic?.fullCurrentQueryArray?.join("");
  let currentBridgeQuery = indexingStatusQueries?.bridge?.fullCurrentQueryArray?.join("");
  let currentErc20Query = indexingStatusQueries?.erc20?.fullCurrentQueryArray?.join("");
  let currentErc721Query = indexingStatusQueries?.erc721?.fullCurrentQueryArray?.join("");
  let currentGovernanceQuery = indexingStatusQueries?.governance?.fullCurrentQueryArray?.join("");
  // let currentNetworkQuery = indexingStatusQueries?.network?.fullCurrentQueryArray?.join("");
  let currentNFTQuery = indexingStatusQueries?.["nft-marketplace"]?.fullCurrentQueryArray?.join("");
  let currentOptionsQuery = indexingStatusQueries?.["derivatives-options"]?.fullCurrentQueryArray?.join("");
  let currentPerpFuturesQuery = indexingStatusQueries?.["derivatives-perpfutures"]?.fullCurrentQueryArray?.join("");

  // Generate query from subgraphEndpoints
  const [fetchStatusLending, { data: statusLending, loading: statusLendingLoading, error: statusLendingError }] = _helper(currentLendingQuery, clientIndexing);
  const [fetchStatusDexAmm, { data: statusDexAmm, loading: statusDexAmmLoading, error: statusDexAmmError }] = _helper(currentDexAmmQuery, clientIndexing);
  const [fetchStatusYield, { data: statusYield, loading: statusYieldLoading, error: statusYieldError }] = _helper(currentYieldAggQuery, clientIndexing);
  const [fetchStatusGeneric, { data: statusGeneric, loading: statusGenericLoading, error: statusGenericError }] = _helper(currentGenericQuery, clientIndexing);
  const [fetchStatusBridge, { data: statusBridge, loading: statusBridgeLoading, error: statusBridgeError }] = _helper(currentBridgeQuery, clientIndexing);
  const [fetchStatusErc20, { data: statusErc20, loading: statusErc20Loading, error: statusErc20Error }] = _helper(currentErc20Query, clientIndexing);
  const [fetchStatusErc721, { data: statusErc721, loading: statusErc721Loading, error: statusErc721Error }] = _helper(currentErc721Query, clientIndexing);
  const [fetchStatusGovernance, { data: statusGovernance, loading: statusGovernanceLoading, error: statusGovernanceError }] = _helper(currentGovernanceQuery, clientIndexing);
  // const [fetchStatusNetwork, { data: statusNetwork, loading: statusNetworkLoading, error: statusNetworkError }] =
  //   useLazyQuery(
  //     gql`
  //       ${currentNetworkQuery}
  //     `,
  //     {
  //       client: clientIndexing,
  //     },
  //   );
  const [fetchStatusNFT, { data: statusNFT, loading: statusNFTLoading, error: statusNFTError }] = _helper(currentNFTQuery, clientIndexing);
  const [fetchStatusOptions, { data: statusOptions, loading: statusOptionsLoading, error: statusOptionsError }] = _helper(currentOptionsQuery, clientIndexing);
  const [fetchStatusPerpFutures, { data: statusPerpFutures, loading: statusPerpFuturesLoading, error: statusPerpFuturesError }] = _helper(currentPerpFuturesQuery, clientIndexing);

  let pendingLendingQuery = indexingStatusQueries?.lending?.fullPendingQueryArray?.join("");
  let pendingDexAmmQuery = indexingStatusQueries?.exchanges?.fullPendingQueryArray?.join("");
  let pendingYieldAggQuery = indexingStatusQueries?.vaults?.fullPendingQueryArray?.join("");
  let pendingGenericQuery = indexingStatusQueries?.generic?.fullPendingQueryArray?.join("");
  let pendingBridgeQuery = indexingStatusQueries?.bridge?.fullPendingQueryArray?.join("");
  let pendingErc20Query = indexingStatusQueries?.erc20?.fullPendingQueryArray?.join("");
  let pendingErc721Query = indexingStatusQueries?.erc721?.fullPendingQueryArray?.join("");
  let pendingGovernanceQuery = indexingStatusQueries?.governance?.fullPendingQueryArray?.join("");
  // let pendingNetworkQuery = indexingStatusQueries?.network?.fullPendingQueryArray?.join("");
  let pendingNFTQuery = indexingStatusQueries?.["nft-marketplace"]?.fullPendingQueryArray?.join("");
  let pendingOptionsQuery = indexingStatusQueries?.["derivatives-options"]?.fullPendingQueryArray?.join("");
  let pendingPerpFuturesQuery = indexingStatusQueries?.["derivatives-perpfutures"]?.fullPendingQueryArray?.join("");

  const [fetchStatusLendingPending, { data: statusLendingPending, loading: statusLendingPendingLoading, error: statusLendingPendingError },] = _helper(pendingLendingQuery, clientIndexing);
  const [fetchStatusDexAmmPending, { data: statusDexAmmPending, loading: statusDexAmmPendingLoading, error: statusDexAmmPendingError },] = _helper(pendingDexAmmQuery, clientIndexing);
  const [fetchStatusYieldPending, { data: statusYieldPending, loading: statusYieldPendingLoading, error: statusYieldPendingError },] = _helper(pendingYieldAggQuery, clientIndexing);
  const [fetchStatusGenericPending, { data: statusGenericPending, loading: statusGenericPendingLoading, error: statusGenericPendingError },] = _helper(pendingGenericQuery, clientIndexing);
  const [fetchStatusBridgePending, { data: statusBridgePending, loading: statusBridgePendingLoading, error: statusBridgePendingError },] = _helper(pendingBridgeQuery, clientIndexing);
  const [fetchStatusErc20Pending, { data: statusErc20Pending, loading: statusErc20PendingLoading, error: statusErc20PendingError },] = _helper(pendingErc20Query, clientIndexing);
  const [fetchStatusErc721Pending, { data: statusErc721Pending, loading: statusErc721PendingLoading, error: statusErc721PendingError },] = _helper(pendingErc721Query, clientIndexing);
  const [fetchStatusGovernancePending, { data: statusGovernancePending, loading: statusGovernancePendingLoading, error: statusGovernancePendingError },] = _helper(pendingGovernanceQuery, clientIndexing);
  // const [
  //   fetchStatusNetworkPending,
  //   { data: statusNetworkPending, loading: statusNetworkPendingLoading, error: statusNetworkPendingError },
  // ] = useLazyQuery(
  //   gql`
  //     ${pendingNetworkQuery}
  //   `,
  //   {
  //     client: clientIndexing,
  //   },
  // );
  const [fetchStatusNFTPending, { data: statusNFTPending, loading: statusNFTPendingLoading, error: statusNFTPendingError },] = _helper(pendingNFTQuery, clientIndexing);
  const [fetchStatusOptionsPending, { data: statusOptionsPending, loading: statusOptionsPendingLoading, error: statusOptionsPendingError },] = _helper(pendingOptionsQuery, clientIndexing);
  const [fetchStatusPerpFuturesPending, { data: statusPerpFuturesPending, loading: statusPerpFuturesPendingLoading, error: statusPerpFuturesPendingError },] = _helper(pendingPerpFuturesQuery, clientIndexing);

  useEffect(() => {
    fetchStatusLending();
    fetchStatusDexAmm();
    fetchStatusYield();
    fetchStatusGeneric();
    fetchStatusBridge();
    fetchStatusErc20();
    fetchStatusErc721();
    fetchStatusGovernance();
    // fetchStatusNetwork();
    fetchStatusNFT();
    fetchStatusOptions();
    fetchStatusPerpFutures();
    fetchStatusLendingPending();
    fetchStatusDexAmmPending();
    fetchStatusYieldPending();
    fetchStatusGenericPending();
    fetchStatusBridgePending();
    fetchStatusErc20Pending();
    fetchStatusErc721Pending();
    fetchStatusGovernancePending();
    // fetchStatusNetworkPending();
    fetchStatusNFTPending();
    fetchStatusOptionsPending();
    fetchStatusPerpFuturesPending();
  }, []);

  useEffect(() => {
    if (
      statusLending &&
      statusDexAmm &&
      statusYield &&
      statusGeneric &&
      statusBridge &&
      statusErc20 &&
      statusErc721 &&
      statusGovernance &&
      // statusNetwork &&
      statusNFT &&
      statusOptions &&
      statusPerpFutures
    ) {
      setIndexingStatus({
        ...statusLending,
        ...statusDexAmm,
        ...statusYield,
        ...statusGeneric,
        ...statusBridge,
        ...statusErc20,
        ...statusErc721,
        ...statusGovernance,
        // ...statusNetwork,
        ...statusNFT,
        ...statusOptions,
        ...statusPerpFutures,
      });
    }
  }, [
    statusLending,
    statusDexAmm,
    statusYield,
    statusGeneric,
    statusBridge,
    statusErc20,
    statusErc721,
    statusGovernance,
    // statusNetwork,
    statusNFT,
    statusOptions,
    statusPerpFutures,
  ]);

  useEffect(() => {
    if (
      statusLendingPending &&
      statusDexAmmPending &&
      statusYieldPending &&
      statusGenericPending &&
      statusBridgePending &&
      statusErc20Pending &&
      statusErc721Pending &&
      statusGovernancePending &&
      // statusNetworkPending &&
      statusNFTPending &&
      statusOptionsPending &&
      statusPerpFuturesPending
    ) {
      setPendingIndexingStatus({
        ...statusLendingPending,
        ...statusDexAmmPending,
        ...statusYieldPending,
        ...statusGenericPending,
        ...statusBridgePending,
        ...statusErc20Pending,
        ...statusErc721Pending,
        ...statusGovernancePending,
        // ...statusNetworkPending,
        ...statusNFTPending,
        ...statusOptionsPending,
        ...statusPerpFuturesPending,
      });
    }
  }, [
    statusLendingPending,
    statusDexAmmPending,
    statusYieldPending,
    statusGenericPending,
    statusBridgePending,
    statusErc20Pending,
    statusErc721Pending,
    statusGovernancePending,
    // statusNetworkPending,
    statusNFTPending,
    statusOptionsPending,
    statusPerpFuturesPending,
  ]);

  useEffect(() => {
    if (
      (statusLending || statusLendingError) &&
      (statusDexAmm || statusDexAmmError) &&
      (statusYield || statusYieldError) &&
      (statusGeneric || statusGenericError) &&
      (statusBridge || statusBridgeError) &&
      (statusErc20 || statusErc20Error) &&
      (statusErc721 || statusErc721Error) &&
      (statusGovernance || statusGovernanceError) &&
      // (statusNetwork || statusNetworkError) &&
      (statusNFT || statusNFTError) &&
      (statusOptions || statusOptionsError) &&
      (statusPerpFutures || statusPerpFuturesError)
    ) {
      setIndexingStatusLoaded({
        lending: true,
        exchanges: true,
        vaults: true,
        generic: true,
        bridge: true,
        erc20: true,
        erc721: true,
        governance: true,
        // network: true,
        ["nft-marketplace"]: true,
        ["derivatives-options"]: true,
        ["derivatives-perpfutures"]: true,
      });
      const newErrorObject = { ...indexingStatusError };
      if (statusLendingError && !indexingStatusError.lending) {
        newErrorObject.lending = true;
      }
      if (statusDexAmmError && !indexingStatusError.exchanges) {
        newErrorObject.exchanges = true;
      }
      if (statusYieldError && !indexingStatusError.vaults) {
        newErrorObject.vaults = true;
      }
      if (statusGenericError && !indexingStatusError.generic) {
        newErrorObject.generic = true;
      }
      if (statusBridgeError && !indexingStatusError.bridge) {
        newErrorObject.bridge = true;
      }
      if (statusErc20Error && !indexingStatusError.erc20) {
        newErrorObject.erc20 = true;
      }
      if (statusErc721Error && !indexingStatusError.erc721) {
        newErrorObject.erc721 = true;
      }
      if (statusGovernanceError && !indexingStatusError.governance) {
        newErrorObject.governance = true;
      }
      // if (statusNetworkError && !indexingStatusError.network) {
      //   newErrorObject.network = true;
      // }
      if (statusNFTError && !indexingStatusError?.["nft-marketplace"]) {
        newErrorObject["nft-marketplace"] = true;
      }
      if (statusOptionsError && !indexingStatusError?.["derivatives-options"]) {
        newErrorObject["derivatives-options"] = true;
      }
      if (statusPerpFuturesError && !indexingStatusError?.["derivatives-perpfutures"]) {
        newErrorObject["derivatives-perpfutures"] = true;
      }
      setIndexingStatusError(newErrorObject);
    }
  }, [
    statusLendingLoading,
    statusDexAmmLoading,
    statusYieldLoading,
    statusGenericLoading,
    statusBridgeLoading,
    statusErc20Loading,
    statusErc721Loading,
    statusGovernanceLoading,
    // statusNetworkLoading,
    statusNFTLoading,
    statusOptionsLoading,
    statusPerpFuturesLoading,
  ]);

  useEffect(() => {
    if (
      (statusLendingPending || statusLendingPendingError) &&
      (statusDexAmmPending || statusDexAmmPendingError) &&
      (statusYieldPending || statusYieldPendingError) &&
      (statusGenericPending || statusGenericPendingError) &&
      (statusBridgePending || statusBridgePendingError) &&
      (statusErc20Pending || statusErc20PendingError) &&
      (statusErc721Pending || statusErc721PendingError) &&
      (statusGovernancePending || statusGovernancePendingError) &&
      // (statusNetworkPending || statusNetworkPendingError) &&
      (statusNFTPending || statusNFTPendingError) &&
      (statusOptionsPending || statusOptionsPendingError) &&
      (statusPerpFuturesPending || statusPerpFuturesPendingError)
    ) {
      setIndexingStatusLoadedPending({
        lending: true,
        exchanges: true,
        vaults: true,
        generic: true,
        bridge: true,
        erc20: true,
        erc721: true,
        governance: true,
        // network: true,
        ["nft-marketplace"]: true,
        ["derivatives-options"]: true,
        ["derivatives-perpfutures"]: true,
      });
      const newErrorObject = { ...indexingStatusErrorPending };
      if (statusLendingError && !indexingStatusErrorPending.lending) {
        newErrorObject.lending = true;
      }
      if (statusDexAmmError && !indexingStatusErrorPending.exchanges) {
        newErrorObject.exchanges = true;
      }
      if (statusYieldError && !indexingStatusErrorPending.vaults) {
        newErrorObject.vaults = true;
      }
      if (statusGenericError && !indexingStatusErrorPending.generic) {
        newErrorObject.generic = true;
      }
      if (statusBridgeError && !indexingStatusErrorPending.bridge) {
        newErrorObject.bridge = true;
      }
      if (statusErc20Error && !indexingStatusErrorPending.erc20) {
        newErrorObject.erc20 = true;
      }
      if (statusErc721Error && !indexingStatusErrorPending.erc721) {
        newErrorObject.erc721 = true;
      }
      if (statusGovernanceError && !indexingStatusErrorPending.governance) {
        newErrorObject.governance = true;
      }
      // if (statusNetworkError && !indexingStatusErrorPending.network) {
      //   newErrorObject.network = true;
      // }
      if (statusNFTError && !indexingStatusErrorPending?.["nft-marketplace"]) {
        newErrorObject["nft-marketplace"] = true;
      }
      if (statusOptionsError && !indexingStatusErrorPending?.["derivatives-options"]) {
        newErrorObject["derivatives-options"] = true;
      }
      if (statusPerpFuturesError && !indexingStatusErrorPending?.["derivatives-perpfutures"]) {
        newErrorObject["derivatives-perpfutures"] = true;
      }
      setIndexingStatusErrorPending(newErrorObject);
    }
  }, [
    statusLendingPendingLoading,
    statusDexAmmPendingLoading,
    statusYieldPendingLoading,
    statusGenericPendingLoading,
    statusBridgePendingLoading,
    statusErc20PendingLoading,
    statusErc721PendingLoading,
    statusGovernancePendingLoading,
    // statusNetworkPendingLoading,
    statusNFTPendingLoading,
    statusOptionsPendingLoading,
    statusPerpFuturesPendingLoading,
  ]);

  // No need to return a JSX element to render, function needed for state management
  return null;
}

export default IndexingCalls;
