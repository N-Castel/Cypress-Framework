/**
 * Parsea una cadena tipo NDJSON (objetos separados por salto de línea)
 * @param {string} ndjsonText - Cadena NDJSON
 * @returns {Array<Object>} - Array de objetos parseados
 */
export const parseNdjson = (ndjsonText) => {
    return ndjsonText
    .split('\n')                    // dividir por saltos de línea
                    .map(str => str.trim())        // limpiar espacios
                    .filter(Boolean)               // eliminar vacíos
                    .map(str => JSON.parse(str));  // parsear cada uno a objeto
  };
