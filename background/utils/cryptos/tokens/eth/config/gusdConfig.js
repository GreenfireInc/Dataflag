export default {
  adress: '0x056fd409e1d7a124bd7017459dfea2f387b6d5cd',
  abi: [
    {
      constant: true,
      inputs: [],
      name: 'name',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: '_spender', type: 'address' },
        { name: '_value', type: 'uint256' }
      ],
      name: 'approve',
      outputs: [{ name: 'success', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [{ name: '_proposedCustodian', type: 'address' }],
      name: 'requestCustodianChange',
      outputs: [{ name: 'lockId', type: 'bytes32' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'totalSupply',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: '_from', type: 'address' },
        { name: '_to', type: 'address' },
        { name: '_value', type: 'uint256' }
      ],
      name: 'transferFrom',
      outputs: [{ name: 'success', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: '_from', type: 'address' },
        { name: '_to', type: 'address' },
        { name: '_value', type: 'uint256' }
      ],
      name: 'emitTransfer',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [{ name: '', type: 'uint8' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'custodian',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [{ name: '_lockId', type: 'bytes32' }],
      name: 'confirmCustodianChange',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'erc20Impl',
      outputs: [{ name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [{ name: '_proposedImpl', type: 'address' }],
      name: 'requestImplChange',
      outputs: [{ name: 'lockId', type: 'bytes32' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: '_owner', type: 'address' },
        { name: '_spender', type: 'address' },
        { name: '_value', type: 'uint256' }
      ],
      name: 'emitApproval',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: '_spender', type: 'address' },
        { name: '_subtractedValue', type: 'uint256' }
      ],
      name: 'decreaseApproval',
      outputs: [{ name: 'success', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [{ name: '_owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: 'balance', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [{ name: '_lockId', type: 'bytes32' }],
      name: 'confirmImplChange',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'symbol',
      outputs: [{ name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: '_to', type: 'address' },
        { name: '_value', type: 'uint256' }
      ],
      name: 'transfer',
      outputs: [{ name: 'success', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [{ name: '', type: 'bytes32' }],
      name: 'implChangeReqs',
      outputs: [{ name: 'proposedNew', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'lockRequestCount',
      outputs: [{ name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [{ name: '', type: 'bytes32' }],
      name: 'custodianChangeReqs',
      outputs: [{ name: 'proposedNew', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        { name: '_spender', type: 'address' },
        { name: '_addedValue', type: 'uint256' }
      ],
      name: 'increaseApproval',
      outputs: [{ name: 'success', type: 'bool' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        { name: '_owner', type: 'address' },
        { name: '_spender', type: 'address' }
      ],
      name: 'allowance',
      outputs: [{ name: 'remaining', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        { name: '_name', type: 'string' },
        { name: '_symbol', type: 'string' },
        { name: '_decimals', type: 'uint8' },
        { name: '_custodian', type: 'address' }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: '_lockId', type: 'bytes32' },
        { indexed: false, name: '_msgSender', type: 'address' },
        { indexed: false, name: '_proposedImpl', type: 'address' }
      ],
      name: 'ImplChangeRequested',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: '_lockId', type: 'bytes32' },
        { indexed: false, name: '_newImpl', type: 'address' }
      ],
      name: 'ImplChangeConfirmed',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: '_lockId', type: 'bytes32' },
        { indexed: false, name: '_msgSender', type: 'address' },
        { indexed: false, name: '_proposedCustodian', type: 'address' }
      ],
      name: 'CustodianChangeRequested',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: false, name: '_lockId', type: 'bytes32' },
        { indexed: false, name: '_newCustodian', type: 'address' }
      ],
      name: 'CustodianChangeConfirmed',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: '_from', type: 'address' },
        { indexed: true, name: '_to', type: 'address' },
        { indexed: false, name: '_value', type: 'uint256' }
      ],
      name: 'Transfer',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: '_owner', type: 'address' },
        { indexed: true, name: '_spender', type: 'address' },
        { indexed: false, name: '_value', type: 'uint256' }
      ],
      name: 'Approval',
      type: 'event'
    }
  ]
}
