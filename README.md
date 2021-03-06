# Randomize Everything

Randomize Everything is a [Nova](https://nova.app) extension that adds commands to randomly generate strings, numbers, colors and a myriad of other content, which can be pretty handy for placeholder and demo content.

Randomize Everything can currently generate:

| Generator                       | Example output                                                       | Editable preferences                                  |
| :------------------------------ | :------------------------------------------------------------------- | :---------------------------------------------------- |
| Alphabetical string             | `YZPBTbERyWRLFejbgrVNcYIQuGmdrJio`                                   | String length                                         |
| Alphanumeric string             | `sNuZ5MNpqBgyM93viq8Uo0kYo59aAOkm`                                   | String length                                         |
| Password-like string            | `o<=4vz@V&IC'gfHFYM+'hzM"=<qd0K7E`                                   | String length                                         |
| Single letter                   | `G`                                                                  |                                                       |
| Sentence (Lorem Ipsum)          | `Id aliqua culpa incididunt voluptate pariatur nisi mollit[...]`     |                                                       |
| Paragraph (Lorem Ipsum)         | `Ea reprehenderit nisi nisi ut officia sint ad fugiat officia[...]`  |                                                       |
| Integer                         | `85`                                                                 | Number range                                          |
| Float                           | `38.31776`                                                           | Number range, number of decimal places                |
| Binary integer                  | `0101010`                                                            | Number range                                          |
| IPv4 address                    | `178.133.130.40`                                                     |                                                       |
| IPv6 address                    | `ceef:a28a:9449:0587:f9b9:3917:5789:718a`                            |                                                       |
| MAC address (48-bit)            | `0F:84:47:EC:F7:DC`                                                  |                                                       |
| MAC address (64-bit)            | `54:E0:2B:AF:C4:60:47:9F`                                            |                                                       |
| UUID (v4)                       | `b96420ab-13b6-48ff-b027-6c8bd4df5e6f`                               |                                                       |
| MD5 hash                        | `44dd3274e0ecf47e7a09c4cdecdaabe0`                                   |                                                       |
| SHA-1 hash                      | `32b0574c6b8b2c74bb2e17ef3363056d41185fba`                           |                                                       |
| SHA-256 hash                    | `2ff2defc8be08b6c8f6a6e7cb9d0b4567f59832eb1a2ddb8f1567636eee072c9`   |                                                       |
| Date (ISO-8601)                 | `1925-03-14`                                                         | Year range                                            |
| Time (ISO-8601)                 | `18:04:20`                                                           |                                                       |
| Date and time (ISO-8601)        | `1942-05-06T08:38:59-01:00`                                          | Year range, timezone format                           |
| Hex color                       | `#c636e7`                                                            | Capitalization                                        |
| RGB color                       | `rgb(197, 72, 57)`                                                   | CSS compatible formatting                             |
| HSL color                       | `hsl(279, 87%, 34%)`                                                 | CSS compatible formatting                             |
| Country name                    | `Barbados`                                                           |                                                       |
| Country code (ISO-3166 alpha-2) | `CA`                                                                 |                                                       |
| Country code (ISO-3166 alpha-3) | `NCL`                                                                |                                                       |
| Country code (ISO-3166 numeric) | `484`                                                                |                                                       |
| First name                      | `Malorie`                                                            |                                                       |
| Last name                       | `Schmidt`                                                            |                                                       |
| Full name                       | `Darline Corte-Real`                                                 |                                                       |
| Email address                   | `velit_lorem32@deserunt.org`                                         | Customize domain extensions, use real email providers |
| Web address                     | `https://www.laboreofficiaex.net/proident/et?mollit=anim&do=739#sit` | Customize domain extensions                           |
| Domain name                     | `occaecat.org`                                                       | Customize domain extensions                           |

## Usage

Search for, install and activate Randomize Everything from Nova's Extension Library (`Extensions -> Extension Library...` or `??? + ??? + 2`).

Once activated, Randomize Everything can be accessed through the Command Palette (`View -> Command Palette...` or `??? + ??? + P`) or as an option in the Editor menu (`Editor -> Randomize Everything`).

## Contributing

Whilst basic, this is my first time developing an extension for a code editor. There might be silly mistakes or questionable decisions here and there. Feel free to submit pull requests to fix anything that's obviously off-kilter.

Randomize Everything is tailored to the use cases that I typically need it for. If there's something that can be added that you think would benefit others, feel free to raise an issue to suggest it!

## Thanks

Inspired by, and hat tip to, [random-sublime-text-plugin](https://github.com/kimpettersen/random-sublime-text-plugin) and [nova-uuid](https://github.com/henrikdahl/nova-uuid) for the inspiration and the handy dandy open source code I used to get started.
