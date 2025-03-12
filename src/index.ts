import type * as xrpl from 'xrpl'

// Type is not restructured correctly on the AccountChannelsParams
// due to the signature indexing on the base request method
export type AccountChannelsParams = Omit<xrpl.AccountChannelsRequest, 'command'>;

