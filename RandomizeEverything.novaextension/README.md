# Randomize Everything

Adds commands to randomly generate everything and anythng. Handy for placeholder and demo content.

Once installed and activated, Randomize Everything can be accessed through the Command Palette (`View → Command Palette...` or `⇧ + ⌘ + P`) or as an option in the Editor menu (`Editor → Randomize Everything`).

## Available generators

Randomize Everything can currently generate:

### Strings

- Alphabetical string - `AeewTwzIakTHhvtCYfkXKEnxkhzwbCYo` (length configurable)
- Alphanumeric string - `7doM4lCfVUUgATULB4AIw2ouU91kw3R8` (length configurable)
- Password-like string - `8dM8tX>U;NR[Fgn£_{hmwlMcydf^VSsj` (length configurable)
- Letter - `P`
- Sentence - `In irure consequat officia ea nulla sunt ullamco ut minim magna velit veniam elit consequat.`
- Paragraph - `Occaecat exercitation mollit laboris quis mollit consequat. Veniam laborum ea quis minim aliqua eiusmod consequat incididunt. Occaecat ullamco reprehenderit eu ullamco non dolor veniam. Dolor dolor dolore occaecat eu eu labore magna nulla Lorem nisi sint eu. Dolore proident proident ea culpa incididunt ad sit deserunt Lorem esse nostrud proident exercitation. Pariatur incididunt dolor enim officia amet.`

### Numbers

- Integer - `71` (range configurable)
- Float - `28.75808`, (range and number of decimal places to output configurable)
- Binary integer - `0101110` (range configurable)

### Dates and times

- Date (ISO-8601) - `2021-04-12` (range configurable)
- Time (ISO-8601) - `04:28:06`
- Date and time (ISO-8601) - `2031-01-03T00:49:48-01:00` (range and timezone format configurable)

### Colors

- Hexadecimal - `#8f00ce` (capitalization configurable)
- RGB - `rgb(190, 157, 153)` (whether to generate CSS-compatible formatting configurable)
- HSL - `hsl(124, 29%, 79%)` (whether to generate CSS-compatible formatting configurable)

### Web and email addresses

- Domain name - `laborefugiatnostrud.com` (domain name extensions configurable)
- Web address - `https://www.cillumvelit.net/adipisicing/in?reprehenderit=nisi&lorem=9920#nisi` (domain name extensions configurable)
- Email address - `malisa22@laborisutipsum.com` (domain name extensions or whether to use real-world email services configurable)

### Machine addresses

- IPv4 address - `223.60.93.208`,
- IPv6 address - `5477:1cf7:50a3:e459:7b47:a4e2:8734:c90a`
- MAC address (48-bit) - `A7:33:BD:27:21:47`
- MAC address (64-bit) - `9D:4F:EE:5D:A9:51:4F:43`

### UUIDs

- UUID (v4) - `21983153-cf52-48f9-9662-145a3e8cc860`

### Hashes

- MD5 - `8dc7c41cc00b14e6b082ef7d83b3394c`
- SHA-1 - `fd0d1be948f0036fe94cb000765757b9a22a7b96`
- SHA-256 - `c3be7381f8e15a1aeb7d293a282ec9878005006aa7cb347fd27e0ed0c30833ef`

### Postal addresses

- Full address (UK-style) - `30 Albion Mews, East Brookfield, HD35 1ZG`
- Full address (US-style) - `42 Festive Park, Princeton, SC 31051`
- Street address - `69 Privet Place`
- City - `Inglewood`
- US state - `Pennsylvania`
- US state code - `TN`
- UK postcode - `PA4 4EL`
- US ZIP Code - `26674`
- US ZIP Code (ZIP+4) - `11236-0072`

### Countries

- Country name - `Nepal`
- Country code (ISO-3166 alpha-2) - `NL`
- Country code (ISO-3166 alpha-3) - `BGD`
- Country code (ISO-3166 numeric) - `376`

### Names

- Full name - `Germaine Kozłowski`
- First name - `Joaquin`
- Last name - `Schmidt`

## A note on the certainty of chance

Randomize Everything produces nonsense.

While it aims to produce that nonsense in a format that is in a valid format according to the relevant specification (if any) and to not output a result that can never exist, there is no guarantee that a particular postcode is actually real, that contacting an email address will garner any response, or that a hash will decode into anything but a jumbled mess.

On the occasion that Randomize Everything actually produces real-world data, this is completely coincidental. Congratulations on beating the odds!

## Thanks

Inspired by, and hat tip to, [random-sublime-text-plugin](https://github.com/kimpettersen/random-sublime-text-plugin) and [nova-uuid](https://github.com/henrikdahl/nova-uuid) for the inspiration and the handy dandy open source code I used to get started.
