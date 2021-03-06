/*
  These magic numbers are charCode math, where we take advantage of the offset
  between any two uppercase leters (e.g. A - C = 2) being the same as the one
  between the emoji flag variant of those letters (e.g. (emoji A) - (emoji C) = 2).
*/
const FLAG_LETTER_EMOJI_FIRST_CODEPOINT = 55356 // "🇦".charCodeAt(0)
const UPPERCASE_AND_FLAG_LETTER_EMOJI_SECOND_CODEPOINT_OFFSET = 56741 // "🇦".charCodeAt(1) - "A".charCodeAt(0)

export const getEmojiFlag = (countryCode: string) => {
  countryCode = countryCode.toUpperCase()

  /* Emoji flags are made from combination of two emoji sequences of two codepoints each. */
  return String.fromCharCode(
    FLAG_LETTER_EMOJI_FIRST_CODEPOINT,
    UPPERCASE_AND_FLAG_LETTER_EMOJI_SECOND_CODEPOINT_OFFSET +
      countryCode.charCodeAt(0),

    FLAG_LETTER_EMOJI_FIRST_CODEPOINT,
    UPPERCASE_AND_FLAG_LETTER_EMOJI_SECOND_CODEPOINT_OFFSET +
      countryCode.charCodeAt(1)
  )
}

export const getCountryCode = (flagEmoji: string) => {
  return String.fromCharCode(
    flagEmoji.charCodeAt(1) -
      UPPERCASE_AND_FLAG_LETTER_EMOJI_SECOND_CODEPOINT_OFFSET,
    flagEmoji.charCodeAt(3) -
      UPPERCASE_AND_FLAG_LETTER_EMOJI_SECOND_CODEPOINT_OFFSET
  )
}
