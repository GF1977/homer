# [1.2.0](https://github.com/GF1977/homer/compare/v1.1.0...v1.2.0) (2026-10-28)


### Features

* add access log configuration for lighttpd and update documentation ([b39ce2f](https://github.com/GF1977/homer/commit/b39ce2fcc132a643e97aa84fdaa9aa03959abce8))

# [1.1.0](https://github.com/GF1977/homer/compare/v1.0.0...v1.1.0) (2026-10-28)


### Bug Fixes

* update Node.js version in .nvmrc and Dockerfile to 24.22.1 ([2545f7b](https://github.com/GF1977/homer/commit/2545f7ba91ec12b79a53cf6b50183ab41443f63e))
* update Node.js version in semantic-release workflow to 24.22.1 ([57c3f37](https://github.com/GF1977/homer/commit/57c3f37469e613f4d499f8c6ca7a819ecefd04ea))


### Features

* add runtime log level configuration and update related documentation ([4e564b4](https://github.com/GF1977/homer/commit/4e564b4b7050f36ca9dacbc0c931963a912cf9ad))

# 1.0.0 (2026-10-28)


### Bug Fixes

* allow disabling IPv6 ([ce2d3e9](https://github.com/GF1977/homer/commit/ce2d3e945a906e56ef43ef29d329a9f39314fcef))
* **auth:** add timestamp in URL to prevent infinite redirection loop ([98b460d](https://github.com/GF1977/homer/commit/98b460d6fe0e09cbdbf37f882f5e5bf7daa48e73))
* auto update system adjustments ([dd2ccce](https://github.com/GF1977/homer/commit/dd2ccce8dce331f107509f02ad7485f622046713))
* **cards:** Avoid lowercase letters cut off [#794](https://github.com/GF1977/homer/issues/794) ([20fb0c2](https://github.com/GF1977/homer/commit/20fb0c2254bf53e2df1332afaf68b8a72baf6958))
* **ci:** latest docker tag targets the latest tag ([b760f04](https://github.com/GF1977/homer/commit/b760f049628858dccc6909ab59f46fcb015050c7))
* **ci:** remove duplicate pnpm version ([aac5885](https://github.com/GF1977/homer/commit/aac58850564793e3de0af8aaf32c91fbbc3f9106))
* **connectivity-checker:** fix network offline issue with auth proxies [#961](https://github.com/GF1977/homer/issues/961) ([8315245](https://github.com/GF1977/homer/commit/83152453c50fba42fbf5c77df04bf3065e1d2749))
* correct procedure to install chart ([e6adfd7](https://github.com/GF1977/homer/commit/e6adfd7bb7958255b71320e200b6543f1ca5e036))
* **dev-server:** fix unparsable dummy-data fson file ([308deb9](https://github.com/GF1977/homer/commit/308deb95e05ce21382a270216d52bb949955dd93))
* **docker:** disable log for healthcheck requests ([c812bda](https://github.com/GF1977/homer/commit/c812bda08f4e90499587867fcf698559f51e7707))
* **Dockerfile:** add default value for ARG VERSION_TAG to prevent build errors ([a8f7d09](https://github.com/GF1977/homer/commit/a8f7d09bd4e1618ff7bc84feb206bb41a819167e)), closes [#881](https://github.com/GF1977/homer/issues/881)
* **Dockerfile:** copy pnpm-workspace.yaml before install ([bfcf203](https://github.com/GF1977/homer/commit/bfcf203a9834bacd1bf99523ac32405c3f5d4343))
* **Dockerfile:** ensure VERSION_TAG is correctly passed as a build argument ([2a0387f](https://github.com/GF1977/homer/commit/2a0387f90e781c2c6ae85736269e8a4a152f52ab)), closes [#881](https://github.com/GF1977/homer/issues/881)
* **docs:** only accept 1 for IPV6_DISABLE ([c8470d1](https://github.com/GF1977/homer/commit/c8470d1e756e9a539cc4b1218e43f00d61f2b1fc))
* Documentation rebase fuckup -_- ([27fcdd8](https://github.com/GF1977/homer/commit/27fcdd89645476c15a5d299a889e23f715e2f527))
* empty / null headers issue ([b168430](https://github.com/GF1977/homer/commit/b168430fbf3f3a85bfcd6aa2d84aab455d4e464b))
* ensure independent service state between page ([61d5d0b](https://github.com/GF1977/homer/commit/61d5d0b722a738a4a0fa5f790b330f1a49d0d5b2))
* ensure smart cards re-mount correctly between pages (stable keys in ServiceGroup) ([#1005](https://github.com/GF1977/homer/issues/1005)) ([2e1c7b3](https://github.com/GF1977/homer/commit/2e1c7b3d27dbe60ca9ded2579527a7dc076d25e9))
* eslint / vue integration ([476cd5d](https://github.com/GF1977/homer/commit/476cd5d441d0fd6a63002d02549d2b289f0e141e))
* fix search on page load ([a3c5b4a](https://github.com/GF1977/homer/commit/a3c5b4ac9dd1ddf2b52fff48ea860c067fb05cf9)), closes [#611](https://github.com/GF1977/homer/issues/611)
* **fonts:** Remove lato reference ([fe25fb0](https://github.com/GF1977/homer/commit/fe25fb03a848f3a8fe93885dfb854dd052c0bfd8))
* **fresh-rss:** Fix response decoding [#902](https://github.com/GF1977/homer/issues/902) ([3f1d8e0](https://github.com/GF1977/homer/commit/3f1d8e01adf19ae8986a653bc863e72d1ed6164b))
* hide overflow to avoid scroll bars in cards [#885](https://github.com/GF1977/homer/issues/885) ([11934c3](https://github.com/GF1977/homer/commit/11934c3995ecd52e304f9627fc078c95e9780204))
* **hyperHDR:** missing return ([a1338bd](https://github.com/GF1977/homer/commit/a1338bd5a5d2ca275445ac9ca91bd09b92f26534))
* improve grammar of offline message ([5f5a508](https://github.com/GF1977/homer/commit/5f5a508b6eae6596dd46c09e25dedbc42d433740))
* **lint:** downgrade eslint, requires more work ([3583c6a](https://github.com/GF1977/homer/commit/3583c6a420ec3426e3d2e47711c32ee70a15792e))
* make sure healthcheck dont use a proxy [#394](https://github.com/GF1977/homer/issues/394) ([1c09714](https://github.com/GF1977/homer/commit/1c09714c438402b5bf1d343585fc88625c7ddb36))
* merge custom headers with the ones set by services ([3e0e19d](https://github.com/GF1977/homer/commit/3e0e19d6ca7ec6b234a31cbd72c972b5d3f36fc7))
* name collision in NextCloud service ([43678d0](https://github.com/GF1977/homer/commit/43678d09c1d0aec3628d1ee6e2d32eeec5bc03bc))
* **navbar:** Adjust icon spacing [#857](https://github.com/GF1977/homer/issues/857) ([4bd449e](https://github.com/GF1977/homer/commit/4bd449e036a22a725ff7236fc5b1d7e39ee0238c))
* **neon-theme:** add missing highlight-variant-inverted colors for better contrast ([e4588bc](https://github.com/GF1977/homer/commit/e4588bc63473bd293da283d296e084da21fb19a1))
* **netlify:** pin Node 24, required by pnpm 11 ([a31fa74](https://github.com/GF1977/homer/commit/a31fa7410d2b022deca94e7e5ecde0a2023b42af))
* Peanut mock data folder & doc typos ([fa4c10c](https://github.com/GF1977/homer/commit/fa4c10c9a4b6b0a735c73ce1ceb18d79ae298a32))
* remove copy past error ([fbc2035](https://github.com/GF1977/homer/commit/fbc20353ef51c56328163906d5a0653ac3b9809d))
* rename ipv6.sh -> lighttpd-ipv6.sh ([5b11259](https://github.com/GF1977/homer/commit/5b11259dd7befd32a322612156dc6c9a7be74ced))
* resolve typo in Healthchecks service name ([23990e8](https://github.com/GF1977/homer/commit/23990e85090b425e98e563e2e390044d0695c19d)), closes [#474](https://github.com/GF1977/homer/issues/474)
* restore auto-update registration broken by interval refactor ([c51951d](https://github.com/GF1977/homer/commit/c51951d6a87019b9577505a828bea3914bbb58e7))
* reverse IPV6_DISABLE logic ([9b77b47](https://github.com/GF1977/homer/commit/9b77b4702250822a2fc0f62493d3cf56346b8b61))
* rewrite peanut smartcard status ([7098f01](https://github.com/GF1977/homer/commit/7098f014337779aabfa31d29810412bb0c428071))
* **search:** Allow usage of the hotkey in the text ([31f7cfa](https://github.com/GF1977/homer/commit/31f7cfa09fd4878f1fcf44d278590e6cdc0eb76d))
* **search:** make keyboard shortcut works again ([6c43829](https://github.com/GF1977/homer/commit/6c438298f2c21b9bd101d4dedc0462e8e8410d17))
* simplify scheduler implementation ([1d66530](https://github.com/GF1977/homer/commit/1d665305c32e9dd888afdf7623f31a7df273239f))
* **smartcard:** fix transmission service rework ([4904717](https://github.com/GF1977/homer/commit/4904717db0e0809128fab789902e3a22bc17f25b))
* **style:** remove duplicated styles ([3419a4b](https://github.com/GF1977/homer/commit/3419a4b6d63a025c92b713b443fb1db3902bd1df))
* typo in github action version -_- ([42dfd66](https://github.com/GF1977/homer/commit/42dfd660608205be3c221cc60889e1239a46145a))
* update API key retrieval instructions for NetAlertx integration ([a527b32](https://github.com/GF1977/homer/commit/a527b325c7bdb8e3a4058df33ec58eda294168f8))
* Update Mealie service component endpoints ([0e5106c](https://github.com/GF1977/homer/commit/0e5106c42a0cdcdf8414603b86d5c8de6e33c5bb))
* **UptimeKuma:** stop overwriting the configured url ([a0c286c](https://github.com/GF1977/homer/commit/a0c286cbf0eeb00c794959842798c3bcec417bfc))
* use double brackets instead of test ([74f6879](https://github.com/GF1977/homer/commit/74f6879ed0a9152699e8ef30a6af5f2d4a4a4cdd))
* wrong version string ([7a662db](https://github.com/GF1977/homer/commit/7a662db1f768f0223b859082ab6ea9ab64c83ca9))


### Features

* add autoupdate support for Emby ([531b1e3](https://github.com/GF1977/homer/commit/531b1e3f646df2d4d330d9e2591ab10173cd0fea))
* add custom service Healthchecks ([1b9a3f1](https://github.com/GF1977/homer/commit/1b9a3f197526c69921d37e84f1eeff27dc42df8e)), closes [#474](https://github.com/GF1977/homer/issues/474)
* add GitHub workflows for Docker image build and semantic release ([94698b6](https://github.com/GF1977/homer/commit/94698b64ea8250ab7c7dc599aed6e5791ba1a670))
* Add Gotify custom service component ([#706](https://github.com/GF1977/homer/issues/706)) ([779deed](https://github.com/GF1977/homer/commit/779deedecd8b89266822aa1d83f8a83b01147107))
* add Lidarr service ([7543725](https://github.com/GF1977/homer/commit/754372579e1e048fb524413ba22dba4237d0c48c))
* add missing notif for lidarr ([6462974](https://github.com/GF1977/homer/commit/64629742f7aec7b34e8fc9e6b83282e496c2fb74))
* add missing notif for radarr ([f6b1247](https://github.com/GF1977/homer/commit/f6b124767e516a57c4ca163915f1ea78deca577e))
* add missing notif for sonarr ([4797047](https://github.com/GF1977/homer/commit/4797047571366cb6345cfee8ea0722f481f576b0))
* add Readarr custom service ([16d3f4f](https://github.com/GF1977/homer/commit/16d3f4f53a4f4be77ace6f4f140e2e639ee761d9))
* adding log level feature ([945fe65](https://github.com/GF1977/homer/commit/945fe654d0bad852ca9b85139337dfacca2ec889))
* **auth:** do not handle redirection in getConfig ([132e9a0](https://github.com/GF1977/homer/commit/132e9a0df516b50c854178ccb726cf9d9dc514fa))
* **auth:** handle unauthorized request in connectivity ([4353f5e](https://github.com/GF1977/homer/commit/4353f5e03658778b526dca6b7dd3f5bd6e31e121))
* **auto-refresh:** add Transmission and docs ([48fd2f5](https://github.com/GF1977/homer/commit/48fd2f5475a0e64e23aa47653ab638a823f37e86))
* **auto-refresh:** centralized auto refresh System ([8953965](https://github.com/GF1977/homer/commit/8953965aede24909947b992c65753f86f2e87901))
* autoupdate support for adGuardHome ([c46b9a3](https://github.com/GF1977/homer/commit/c46b9a311b190b264cc988923978c28b7f2902b6))
* **cards:** add multi link support ([3468b9d](https://github.com/GF1977/homer/commit/3468b9d795bbc8abd59fdb1ffc0cdaf605aad6fe))
* **ci:** remove debug flag ([842cf8a](https://github.com/GF1977/homer/commit/842cf8ad2c579973a6d5ca11989f7c4a66cdc5d5))
* **components:** Register Generic component globally ([234e063](https://github.com/GF1977/homer/commit/234e063d2eae4ac7ab2de626ef4c6482f6e8a684))
* **connectivity:** change query parameter to change connectivity ([f64278d](https://github.com/GF1977/homer/commit/f64278d41d9850461871c1c7908f0c35cbca05cd))
* **container:** support timezone configuration ([d5921d9](https://github.com/GF1977/homer/commit/d5921d939b80bcf3bccb3bcfe4f811567d1ff93a))
* **docker:** skip assets install on permission error ([3396257](https://github.com/GF1977/homer/commit/3396257528246944c5d3db80d29161741ba1948d))
* **emby:** Detect the server version instead of a legacyAuth option ([e4830a9](https://github.com/GF1977/homer/commit/e4830a967518ffa47259437664c13fd77e8be58d))
* **emby:** opt in to modern Jellyfin authorization ([dcc87c7](https://github.com/GF1977/homer/commit/dcc87c7f21e3f5101c41b7d0f1cd12392aa6eb92))
* Enables setting colors for individual cards ([23eb5b3](https://github.com/GF1977/homer/commit/23eb5b3fb7c9de2a370475f6131af7c96efe495c))
* Inject package.json version into the app ([81c7496](https://github.com/GF1977/homer/commit/81c7496264402e18fd16a52400ff6401d4b63fef))
* **logs:** get lighthttpd accesslog in docker logs ([13fb056](https://github.com/GF1977/homer/commit/13fb05696a9a958acd5890dac381c2d4bb494b37))
* **pihole:** Support Pi-hole v6 API with session management ([#875](https://github.com/GF1977/homer/issues/875)) ([9307f5a](https://github.com/GF1977/homer/commit/9307f5a926e9fcee1237a2da4253e0db9f0ba50d))
* **ping:** support for custom http success codes. Fix [#425](https://github.com/GF1977/homer/issues/425) ([721a8c2](https://github.com/GF1977/homer/commit/721a8c2e66c4e98c303826bd6ab344de5c1e3ba8))
* **pwa:** enhance connectivity checks ([bf2fcc6](https://github.com/GF1977/homer/commit/bf2fcc6641643018bd5224ec2f8308173d54cfa4))
* Scheduler migration for netalertx ([e360b65](https://github.com/GF1977/homer/commit/e360b651d76b810ac81fbd0f9d70c20771707295))
* **smart-cards:** handle dynamic loading error ([a5eeb1e](https://github.com/GF1977/homer/commit/a5eeb1e44e5bc550f81ef95b8dd8f44075e1b326))
* **smartcard:** Simplify ping card ([a666d7a](https://github.com/GF1977/homer/commit/a666d7aa9390559afdcc00c0af085b142db9c181))
* **ui:** Rework theming system, add new theme. ([359f1ff](https://github.com/GF1977/homer/commit/359f1ffb53cdb3476acbfcb8c1af70dff2eaf403))
* upgrade Font Awesome to 7.3.1 ([d27ab59](https://github.com/GF1977/homer/commit/d27ab5955834680ddbf48cd6fb27042f76bf3860))
