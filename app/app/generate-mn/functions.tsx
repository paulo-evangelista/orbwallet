import * as xrpl from "xrpl";
import * as bip39 from "bip39";
import * as xrplLib from "xrpl-accountlib";
export default function generateMnemonic() {
  const wallet = xrplLib.generate.mnemonic();
  return wallet.secret.mnemonic || "";
}
