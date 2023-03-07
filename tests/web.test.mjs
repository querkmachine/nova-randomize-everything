import { repeat } from "./util/helpers";
import { webEmail, webDomainName, webURL } from "../src/generators/web";

const emailNamePartRegex = "[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+";
const domainNameRegex = "([a-z0-9]+(-[a-z0-9]+)*.)+[a-z]{2,}";

describe("web", () => {
  describe("webDomainName", () => {
    it("generates valid domain names", () => {
      const regex = new RegExp(`^${domainNameRegex}$`);
      repeat(10, () => expect(webDomainName()).toMatch(regex));
    });

    it("generates domains using custom TLDs", () => {
      const config = { domainExtensions: [".gov"] };
      repeat(5, () => expect(webDomainName(config).slice(-4)).toBe(".gov"));
    });
  });

  describe("webEmail", () => {
    it("generates valid email addresses", () => {
      const regex = new RegExp(`^${emailNamePartRegex}@${domainNameRegex}$`);
      repeat(10, () => expect(webEmail()).toMatch(regex));
    });

    it("generates email addresses using custom TLDs", () => {
      const config = { domainExtensions: [".gov"] };
      repeat(5, () => expect(webEmail(config).slice(-4)).toBe(".gov"));
    });

    it("generates email addresses using real email providers", () => {
      const realEmailProviders = [
        "gmail.com",
        "googlemail.com",
        "yahoo.com",
        "outlook.com",
        "hotmail.com",
        "protonmail.com",
        "aol.com",
        "icloud.com",
      ];
      const config = { useRealEmailDomains: true };
      repeat(10, () => {
        const emailDomain = webEmail(config).split("@")[1];
        return expect(realEmailProviders).toContain(emailDomain);
      });
    });
  });

  describe("webURL", () => {
    it("generates valid domain names", () => {
      const protocolRegex = new RegExp(`^http[s]?:`);
      repeat(10, () => {
        const url = new URL(webURL());
        return [
          expect(url.protocol).toMatch(protocolRegex),
          expect(url.host).not.toBeUndefined(),
          expect(url.pathname).not.toBeUndefined(),
          expect(url.search).not.toBeUndefined(),
          expect(url.hash).not.toBeUndefined(),
        ];
      });
    });

    it("generates domains using custom TLDs", () => {
      const config = { domainExtensions: [".gov"] };
      repeat(5, () => {
        const url = new URL(webURL(config));
        return expect(url.host.slice(-4)).toBe(".gov");
      });
    });
  });
});
