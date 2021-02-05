/*
 * @Author: 33357
 * @Date: 2021-02-05 13:16:41
 * @LastEditTime: 2021-02-05 16:35:23
 * @LastEditors: 33357
 */
'use strict';

const ethUtil = require('ethereumjs-util');
const sigUtil = require('eth-sig-util');

const Sign = {
  // 检查sign
  test: ({ signMessage, signData }) => {
    const msgData = Sign.get();
    msgData.message = signMessage;
    const recovered = sigUtil.recoverTypedSignature({
      data: msgData,
      sig: signData,
    });
    if (
      ethUtil.toChecksumAddress(recovered) ===
      ethUtil.toChecksumAddress(signMessage.loginWallet)
    ) {
      return true;
    }
    return false;
  },
  // 获取sign
  get: () => {
    const msgParams = {
      types: {
        EIP712Domain: [
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'version',
            type: 'string',
          },
          {
            name: 'chainId',
            type: 'uint256',
          },
          {
            name: 'verifyingContract',
            type: 'address',
          },
        ],
        Login: [
          {
            name: 'loginWallet',
            type: 'address',
          },
          {
            name: 'loginDate',
            type: 'string',
          },
        ],
      },
      primaryType: 'Login',
      domain: {
        name: 'UniChat',
        version: '1',
        chainId: '1',
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
      },
      message: {
        loginWallet: null,
        loginDate: null,
      },
    };
    return msgParams;
  },
};
// 检查是否为EthAddress
Sign.isEthAddress = ({ testAddress }) => {
  return ethUtil.isValidChecksumAddress(testAddress);
};

module.exports = Sign;
