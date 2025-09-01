/**
 * Utility functions for handling portable text content
 */

/**
 * Safely extracts plain text from portable text content
 * @param portableText - The portable text content (can be string, array, or object)
 * @returns Plain text string or empty string if invalid
 */
export function extractTextFromPortableText(portableText: any): string {
  // If it's already a string, return it
  if (typeof portableText === 'string') {
    return portableText;
  }

  // If it's null or undefined, return empty string
  if (!portableText) {
    return '';
  }

  // If it's not an array, return empty string
  if (!Array.isArray(portableText)) {
    return '';
  }

  // Extract text from portable text blocks
  return portableText
    .map((block: any) => {
      if (block._type === 'block' && Array.isArray(block.children)) {
        return block.children
          .map((child: any) => child.text || '')
          .join('');
      }
      return '';
    })
    .join(' ')
    .trim();
}

/**
 * Safely checks if a value is portable text
 * @param value - The value to check
 * @returns True if the value appears to be portable text
 */
export function isPortableText(value: any): boolean {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.some((block: any) => 
      block && 
      typeof block === 'object' && 
      block._type === 'block'
    )
  );
}
