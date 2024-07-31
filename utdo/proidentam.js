function validateSequence(seq) {
  return Array.isArray(seq) || ArrayBuffer.isView(seq) ? seq : null;
}
