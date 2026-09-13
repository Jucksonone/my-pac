function FindProxyForURL(url, host) {
  var proxyDomains = [
    ".claude.ai",
    ".claude.com",
    ".anthropic.com",
    ".claudeusercontent.com"
  ];

  for (var i = 0; i < proxyDomains.length; i++) {
    if (dnsDomainIs(host, proxyDomains[i])) {
      return "PROXY 9.249.6.26:6648";
    }
  }

  return "DIRECT";
}
