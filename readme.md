# country flag emoji <-> country code

Easy as pie:

```js
import { getEmojiFlag } from "@cprecioso/country-flag-emoji"

getEmojiFlag("ES") // -> πͺπΈ

getEmojiFlag("nl") // -> π³π± (doesn't matter, upper or lower case)

// (we only keep the first two letters, so if you're using language codes like "en-US", you should take the last two letters yourself)
getEmojiFlag("pt-BR") // -> π΅πΉ (oops!)
getEmojiFlag("pt-BR".slice(-2)) // -> π§π· (correct!)

getEmojiFlag(/* any two-letter country code (ISO 3166-1) */) // -> its corresponding flag emoji
```

And conversely:

```js
import { getCountryCode } from "@cprecioso/country-flag-emoji"

getCountryCode("πͺπΈ") // -> ES
getCountryCode("π³π±") // -> NL
getCountryCode("π΅πΉ") // -> PT
getCountryCode("π§π·") // -> BR

getCountryCode(/* any flag emoji */) // -> its corresponding country code
```

This package uses CharCode math β¨magicβ¨, and not a database, so it's extremely lightweight and never goes out-of-date. However, `emoji flag <-> ISO country code` is the only feature it offers. If you need more, this is not your package.

> Keep in mind that the manufacturer of your OS might choose not to display flags, displaying the country code in emoji letters instead. This is out of my control -- and basically, out of the control of anyone who is not the manufacter of your OS.
