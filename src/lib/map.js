/** Create a representation of a square grid using Arrays that will match to our "game map" */
export function createSquare(height){
  const rows = height || 3; /** use the provided argument or default to 3 */
  const columns = height || 3;
  const field = [];

  for(let x=0; x < rows; x++){
    let row = [];

    for(let y = 0; y < columns; y++){
       /** we set the row/column information inside the slot so we can return an array of slots on win conditions
             * that way we won't to make any special changes to the slot object in the future. */
      let slot = { occupied: false, symbol: '', row: x, column: y};
      row.push(slot);
    }
    field.push(row);
  }
  return field;
}