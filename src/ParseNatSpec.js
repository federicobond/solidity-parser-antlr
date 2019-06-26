
/**
 * Parse a full text comment to an object that can be easly consumed
 * @param comment full text comment
 */
module.exports = function (comment) {
  let isMultiline = false;

  // remove comments definers
  // the comments can be multiline of single line
  if (comment.substring(0, 3) === '/**') {
    isMultiline = true;
    // if it is a multiline, remove line breaks, "/**"" (the comment begin)
    // "*/"" (the comment end), and "* @" at the begining of each comment
    comment = comment.replace(/(\r|\n|\/\*\*|\*\/|\*(?=[ ]?@))/g, '');
  } else if (comment.substring(0, 3) === '///') {
    // if it is a single line,
    // remove just line breakers and "///" (the comment begin)
    comment = comment.replace(/(\r|\n|\/\/\/)/g, '');
  }

  // split text by comment type
  const splitComments = comment
    .split(/@(title|author|notice|dev|param|return)/g);
  // let's start a map
  const resultComments = new Map();

  // iterate through all the split comments
  // start in the second result (because the first one is usually nothing)
  // then iterate each two elements, because since the split is done using
  // the natspec type
  for (let x = 1; x < splitComments.length; x += 2) {

    // verify if the type exists in the map
    let previousValue = resultComments.get(splitComments[x]);

    // trim the comment
    let trimmedComment = splitComments[x + 1].trim();

    // if the comment if type 'param' we need to extract the first word
    // which is the variable name
    if (splitComments[x] === 'param') {
      const spliten = trimmedComment.split(' ');
      // and then rebuild it in JSON format
      trimmedComment = JSON.parse(
        `{"${spliten[0]}":"${spliten.slice(1, spliten.length).join(' ')}"}`
      );
    }

    // finally, if the value was found, update it
    if (previousValue !== undefined) {
      if (Array.isArray(previousValue)) {
        previousValue.push(trimmedComment);
      } else {
        previousValue = [previousValue, trimmedComment];
      }
      resultComments.set(splitComments[x], previousValue);
    } else {
      // otherwise set the value for the first time
      // in case it is 'param' type, it should be an array
      // even if there's only one comment (just to have a pattern)
      resultComments.set(splitComments[x],
        (splitComments[x] === 'param') ? [trimmedComment] : trimmedComment
      );
    }
  }
  // convert map to pseudo-json
  const obj = Object.create(null);
  for (const [k, v] of resultComments) {
    // We don’t escape the key '__proto__'
    // which can cause problems on older engines
    obj[k] = v;
  }
  return [isMultiline, obj]
}
