// 在严格模式下获取 collection 
function getCollection(db, collName) {
  return new Promise(resolve => {
    db.collection(
      collName,
      { strict: true },
      (err, coll) => err ? resolve(null) : resolve(coll)
    )
  })
}

module.exports = {
  getCollection
}