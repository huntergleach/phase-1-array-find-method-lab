function superbowlWin(array) {
    const results = array.find(record => record.result === "W") 
    return !!results ? results.year : undefined 
}
   
   
    // if (results === true) {
//         return results.year
//     } else {
//         return undefined
//     }

