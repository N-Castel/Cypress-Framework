/**
 * Parsea una cadena tipo NDJSON (objetos separados por salto de línea)
 * @param {string} ndjsonText - Cadena NDJSON
 * @returns {Array<Object>} - Array de objetos parseados
 */
export const parseNdjson = (input) => {
    let text = '';
  
    if (typeof input === 'string') {
      text = input;
    } else if (Buffer.isBuffer(input)) {
      text = input.toString('utf8');
    } else if (typeof input === 'object') {
      // Ya es un objeto parseado, devolverlo como array
      return [input];
    } else {
      throw new Error('parseNdjson: input inválido. Se esperaba string, buffer o objeto JSON.');
    }
  
    return text
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean)
      .map(line => JSON.parse(line));
  };
  