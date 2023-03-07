## Version 1.2.2

Nova 10+ now uses the native `nova.crypto.randomUUID` method when generating random UUIDs. Older versions of Nova continue to use the existing generator.

Some build-time dependencies have also been updated to the most recent versions.

## Version 1.2.1

This is a bugfix release, which fixes newline characters being removed if the right-click context menu is used to perform a replacement at the end of or on a blank line. Thanks to @colinfoster for [reporting this issue](https://github.com/querkmachine/nova-randomize-everything/issues/2) and suggesting a fix.

The lorem-ipsum dependency was updated to resolve an issue with a circular dependency.

## Version 1.2.0

This update focuses on improving the user experience when generating random numbers.

Previously you could only generate numbers equal to or higher than 0. Range values were prompted for input using a small, easy to miss notification at the top right of the window, and strictly required you to supply the range in the format "[min]-[max]" (`0-100`). This has been updated in a few ways:

- The small notification has been replaced with a more prominently displayed modal.
- The recommended way to separate min and max numbers is now a comma, rather than a hyphen. For example, `0, 10`.
- You can put spaces between values in the list. `0,10`, `0, 10` and `0 , 10` work just the same.
- You can now provide a value below zero to generate negative numbers. For example, `-10, 10` for numbers between -10 and 10.
- You can now specify several comma-separated values, and the lowest and highest values will be determined automatically. For example, providing `-15, -46, 90, 8, 34, -36` will generate numbers between -46 and 90. Useful if you're copying and pasting from elsewhere.
- Because of this, you can now specify the minimum and maximum values in any order. `10, -10` will work just the same as `-10, 10`.

These changes apply to generating both integers and floats. Binary integer generation continues to only support positive integers.

For backwards compatibility reasons, using a hyphen separator will still work but will only be able to generate positive numbers. You must use a comma if you want negative numbers.

## Version 1.1.0

- Added single letter string generation.

## Version 1.0.0

Initial release with support for:

- Colors (hexadecimal, RGB, HSL)
- Country
- Country code (ISO-3166 alpha-2, ISO-3166 alpha-3, ISO-3166 numeric)
- Dates, times and datetimes (ISO-8601)
- Domain names
- Email addresses
- Floats
- Hashes (MD5, SHA-1, SHA-256)
- Integers (decimal, binary)
- IP addresses (v4, v6)
- Lorem Ipsum (sentences, paragraphs)
- MAC addresses (48-bit, 64-bit)
- Names (first, last, full)
- Strings (alphabetical, alphanumeric, password-like)
- UUID (v4)
- Web addresses
