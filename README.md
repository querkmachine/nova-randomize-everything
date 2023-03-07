# Randomize Everything

Randomize Everything is a [Nova](https://nova.app) extension that adds commands to randomly generate numbers, strings, colors and a myriad of other things, which can be pretty handy when you need placeholder, demo or test content.

## Installation

You can [install Randomize Everything from the Nova extensions website](https://extensions.panic.com/extensions/querkmachine/querkmachine.RandomizeEverything/).

From within Nova, you can install Randomize Everything using Nova's Extension Library. Do this by going to 'Extensions' in the menu bar and clicking on 'Extension Library...' (alternatively press <kbd>⌘ Command</kbd> + <kbd>⇧ Shift</kbd> + <kbd>2</kbd> on your keyboard), and then searching for Randomize Everything.

## Usage

Once installed and activated, Randomize Everything can be accessed several ways:

- Through the Command Palette, my personal favourite ('View' and 'Command Palette...' in the menu, <kbd>⌘ Command</kbd> + <kbd>⇧ Shift</kbd> + <kbd>P</kbd>).
- As an option in the Editor menu ('Editor' and 'Randomize Everything'), when a compatible document is open.
- Via the right-click context menu, when a compatible document is open.

### Generators

Here's everything you can create using Randomize Everything, in handy-dandy categories.

Head over to the wiki to find [examples of what each generator outputs when used](https://github.com/querkmachine/nova-randomize-everything/wiki/Generator-ouput-examples).

- Strings
  - Random string (alphabetical)
  - Random string (alphanumeric)
  - Random string (password-like)
  - Random letter
  - Random sentence (Lorem Ipsum)
  - Random paragraph (Lorem Ipsum)
- Numbers
  - Random integer
  - Random number
  - Random binary integer
- Machine addresses
  - Random IP address (v4)
  - Random IP address (v6)
  - Random MAC address (48-bit)
  - Random MAC address (64-bit)
- UUIDs
  - Random UUID (v4)
- Hashes
  - Random MD5 hash
  - Random SHA-1 hash
  - Random SHA-265 hash
- Dates and times
  - Random date (ISO-8601)
  - Random time (ISO-8601)
  - Random date and time (ISO-8601)
- Colors
  - Random hex color
  - Random RGB color
  - Random HSL color
- Countries
  - Random country name
  - Random country code (ISO-3166 alpha-2)
  - Random country code (ISO-3166 alpha-3)
  - Random country code (ISO-3166 numeric)
- Names
  - Random full name
  - Random first name
  - Random last name
- Web
  - Random domain name
  - Random web address
  - Random email address

### Settings

Randomize Everything includes a few handy settings for tailoring how it generates stuff. [An overview of the available settings](https://github.com/querkmachine/nova-randomize-everything/wiki/Settings) is on the wiki.

## Contributing

Whilst basic, this is my first time developing an extension for a code editor. There might be silly mistakes or questionable decisions here and there. Feel free to submit pull requests to fix anything that's obviously off-kilter.

Randomize Everything is tailored to the use cases that I typically need it for. If there's something that can be added that you think would benefit others, feel free to raise an issue to suggest it!

## Thanks

Inspired by, and hat tip to, [random-sublime-text-plugin](https://github.com/kimpettersen/random-sublime-text-plugin) and [nova-uuid](https://github.com/henrikdahl/nova-uuid) for the inspiration and the handy dandy open source code I used to get started.
