const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  const merkleTree = new MerkleTree(niceList);
  const root = merkleTree.getRoot();

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    test_name: 'Norman Block',
    merkle_root: root,
    proof: merkleTree.getProof(niceList.findIndex(n => n === 'Norman Block')),
  });

  console.log({ gift });
}

main();