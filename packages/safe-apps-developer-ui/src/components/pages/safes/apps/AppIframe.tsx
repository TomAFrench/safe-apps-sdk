import React from 'react';
import styled from 'styled-components';
import { useRouteMatch } from 'react-router';
import {
  RequestId,
  RPCPayload,
  Transaction,
  SendTransactionsArgs,
  SendTransactionParams,
} from '@gnosis.pm/safe-apps-sdk';
import { useProviderStore } from 'src/stores/provider';
import { TransactionModal } from 'src/components/pages/safes/apps/TransactionModal';
import { ETHEREUM_NETWORK_TO_ID } from 'src/api/provider';
import { SafeApp } from 'src/types/apps';
import { useAppCommunicator } from './communicator';

const SIframe = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
`;

type ProposedTxs = {
  transactions: Transaction[];
  requestId: RequestId;
  params: SendTransactionParams;
};

const AppIframe = ({ url, app }: { url: string; app: SafeApp }): React.ReactElement => {
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  const communicator = useAppCommunicator(iframeRef, app);
  const [proposedTxs, setProposedTxs] = React.useState<ProposedTxs | null>(null);
  const [networkId, provider] = useProviderStore((state) => [state.networkId, state.provider]);
  const {
    params: { safeAddress },
  } = useRouteMatch<{ safeAddress: string }>();

  React.useEffect(() => {
    communicator?.on('getSafeInfo', () => ({
      safeAddress,
      network: ETHEREUM_NETWORK_TO_ID[networkId],
    }));

    communicator?.on('sendTransactions', (msg) => {
      const params = msg.data.params as SendTransactionsArgs;

      setProposedTxs({
        transactions: params.txs,
        params: params.params || { safeTxGas: 0 },
        requestId: msg.data.id,
      });
    });

    communicator?.on('rpcCall', async (msg) => {
      const params = msg.data.params as RPCPayload;

      try {
        if (provider) {
          const response = await provider.send(params.call, params.params);

          return response;
        }

        throw new Error('Provider unavailable');
      } catch (err) {
        return err;
      }
    });
  }, [communicator, safeAddress, networkId, provider]);

  return (
    <>
      <SIframe title="Safe App iframe" src={url} ref={iframeRef} />;
      <TransactionModal
        open={!!proposedTxs}
        txs={proposedTxs?.transactions || []}
        onClose={() => setProposedTxs(null)}
        app={app}
        safeAddress={safeAddress}
        onUserConfirm={(safeTxHash) => communicator?.send({ safeTxHash }, proposedTxs?.requestId || '')}
        onUserReject={() => communicator?.send('Transaction rejected by user', proposedTxs?.requestId || '', true)}
      />
    </>
  );
};

export { AppIframe };
