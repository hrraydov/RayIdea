module.exports = {
  create: require('./create.js'),
  getAll: require('./getAll.js'),
  getById: require('./getById.js'),
  getOwnerOf: require('./getOwnerOf.js'),
  getCandidateFor: require('./getCandidateFor.js'),
  getMemberOf: require('./getMemberOf.js'),
  delete: require('./delete.js'),
  becomeMember: require('./becomeMember.js'),
  cancelCandidature: require('./cancelCandidature.js'),
  acceptMember: require('./acceptMember.js'),
  declineMember: require('./declineMember.js')
};