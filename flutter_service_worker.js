'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e58013becb8f2c4d723110249e5ed138",
".git/config": "b908e7a82ce66ec263a358a079fa2367",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "19add047335f32be0fe8f73ce18c518b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6d38ff84a6836b485af6230dcd80e296",
".git/logs/refs/heads/gh-pages": "6d38ff84a6836b485af6230dcd80e296",
".git/logs/refs/remotes/origin/gh-pages": "631cc3dc4b9f33ff90d17c94c44912d3",
".git/objects/02/81a565e476c89e49c6da9a78f50383de44b45a": "326d9236602902fa597df5ef181228c4",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0c/ae8c63b6ac6a2d8ca0553776cca48dd49accf1": "b992f2805ff2560a56cde447593ee264",
".git/objects/13/61df6d4c12667ce14ed0cde5131ea19488c4cf": "134a4833a0d2ab134047b70113f13e08",
".git/objects/1a/746bf2e01eb0fd35473f7694daee2cb1220d50": "a816279535b309b04747b032007a3940",
".git/objects/1d/8ce9e23dbf275d0c948973d2794a419db9dc1f": "c6d7ded26b45e162b67c414ffd29d786",
".git/objects/2a/7540414e5815fb370d76a7485cf77620750c70": "f1c4b1a6c3f0b9867a36474bede0324a",
".git/objects/33/851c36337b45cd513e52662bdb652220efc501": "ff7f88d879d67910c8807a4fcd0b1594",
".git/objects/3a/2081687246ef4ad0301c77a38bbac67f42962b": "0e51c5923b741a2cd6982a8086cecb0b",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/40/b9904a260b2825903090f644098836d2aa1317": "9ced930ee632d17678db3a6e2baf04d5",
".git/objects/42/722c6d2b397f100674f7a17a1f4d341e9e6af7": "5d6dfd3fbe5fe0190cbfe12292108f85",
".git/objects/45/127192c64b10afd6e4c7f4dab2ba9901ea5082": "1c04ed4c1d4b315b7e994312d11a6450",
".git/objects/45/319ad435c45c1f417534a7b41e29a67f8dadf2": "78f1610e6b2475f45858238f9695b00d",
".git/objects/46/0aae7f9fabd036daf3f22c1ae4a9b72c998b7d": "4104c81f26469f876e1a75eab81df9e6",
".git/objects/47/674eea7da64390a405bbef02757a58dd436d93": "acd1422c6ee3a4d8cd19ee4c16d48fea",
".git/objects/48/cf0e3520c9dc825199b0aff1305f5301188ac0": "d624ebf81653203ebd142bdeef8ba9a6",
".git/objects/4b/3a1e7e4ed043672e509974fe4b4391d9c84329": "c6e116e0ba8ccc60b880af0c31d59245",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/54/4c1b53397245d8688c3249ed4b0777ed4731a3": "3272f7344825ce6a05a0e0f20f94f0cd",
".git/objects/5a/3cb2aacf1bf5bbc86f4f6073f7be2019d6935f": "ea666fdef343db9edd0eae050798788b",
".git/objects/5a/a2473b9e9a1e041bce357dc532a1028aa000fd": "4a246002f00136bc89d21fac53b116bc",
".git/objects/5a/a803c922b8338a2c24b1ee98ec6022d02cf48f": "7ef4275d1337006df6fa6da173453131",
".git/objects/5c/770d7e797a43058b3ab687146c2f4e4926e565": "83d358131bf4ccd791ea5d1723df33b8",
".git/objects/5c/82dc93970fb145370b2e72bf4f4a8a1d72f441": "98adff189d8b2f15c1874f391e5aacff",
".git/objects/5e/ed8a0446f149263e07b8c571ae1bac24753957": "d5c806ade9bd110291c26bfb7472b34d",
".git/objects/65/aa77efc8802a51907b2bb0504db2c4a7b1969f": "bdbbf23863d0bbc1af04f1a7f626933c",
".git/objects/67/399c7928c33579a28c834372b38c616b1bc9eb": "4aaaa9d1183cd1bfc7cd4a6f58dda2a4",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/3d41aadfc32c53b2dd4f01f0d203c76ffa8ef3": "fd8a64d0d4e3c4a94204b5cebb956822",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/71/fbac06d88a8e434ac9549b91e3c7a5e84a1fd9": "4abdc357225637a93fb3d999cecd3ca2",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/85/8393fb062100f6da2defde163cec871c856513": "a1ccb831689ac6d03dbb0a30fc5e3864",
".git/objects/87/484fc20f6bf070865024f366dd24c96be529b7": "a42de65962ea11bb785782a6345c91b1",
".git/objects/87/758347b0f73819af4e47a6117b2287a3b49422": "bf56296e82afa7c8982717212914e3b6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/93/1bb2c758ddfc9395b3c936f516d6a9edf04890": "0b9c28abb4c9df8bbd73a0c8d49c0110",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/97/52be66691441dff98d3ac59d359ea8c277c67d": "ca25242324591bee4b56c8c4644500c6",
".git/objects/97/9d991083f916f31f2cf0ca38089e5df8f148e7": "ff54722db07af63715103f86af93231d",
".git/objects/9f/29fba7e60108ddc94a102de4fe68a3cb7654f9": "b585aebb0d77527303ca996c5530b5c0",
".git/objects/a1/37ba2b115fabb70a0304dea97b17fae168fcf8": "63cffe2ef41a1fc8be42899811dfb06d",
".git/objects/a4/c0a32c37e3b64b3928b9e30dc0070d675a1a7d": "f92a4629edffbc63dc52f9f004c339c1",
".git/objects/a5/65a76a64732a6e1ae76b82f944cb71c9e57f73": "a72694956e501854147e5cc856cfaec6",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ac/10a859a861f9152ea14b7f43e3ca6d078eb6da": "1a5557f5b8b8744236c885d2e70ff233",
".git/objects/ac/a6564a91509b74922bfd4f2d90f4bf9ab7c77a": "801ad4e77a57178e18410ce5b06d75fb",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b2/a8706155391e17c922b0ad55e5d1487459725f": "9b101327e2720a1c96768bbfec1215af",
".git/objects/b5/11fd1cd89d6300c6f90b71d16b16d13f34aa1d": "8840b67575f1e299d07d21ddf4a686f2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a0a84298e6a1d891eb760422aecf6015e9610d": "050f13dcdb0ecd73bd1ffe9c8895ca59",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bc/52a6329695301c5d64c3fbf75ab020ae4b6255": "4e26fced89c8c9a766a343216fc738c5",
".git/objects/c2/333a86f89fcc67f73c27df6f9babe522fbdd24": "01083a7da5fd7005ece4a456e8bfdf2e",
".git/objects/c5/02043dd08cabbcf61dda9948a1734c3bca9116": "55dc5f18c166788671acbf7615ba53a4",
".git/objects/c8/09f49468a3e2d2b717d18de504c1e2b0b70375": "0f950f73474033a697fb7e12e7f9aa44",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/cd/76f6d51c1dfcac03c3f3825302a9ff74868e6f": "58ad2da133def10edfff2f9f48ead171",
".git/objects/d2/2dab1eb38abb63eeaf3f48be3e79fbfab0bd8f": "490a4f17d1078dc4b3c3f2142644cdcf",
".git/objects/d3/17556228902a70795e2228a71a2e9b8785fd2c": "b8eccde53f8017e7682fe237b426d6a7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/8d465b3e80cd2b384a2be3308f4ee3edaefa3e": "49921c405ad3546b5a72c4e3f1a42a1f",
".git/objects/d7/9d990a555e73ff2c34fbede72722961a7ab18a": "77f89497abf929494ef46e4aad37a408",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/de/d97f2f9905a673aa9928196f4a35ee74ecebd0": "200dc554f0352b16d085dcf2256d2dfe",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d12d6e1186f4a1ae8bd7172515cef5bda77f95": "84e7c1a2d80c52ca6447e8ff2d665c7a",
".git/objects/ef/42b648ac356d86a46285d48a2772b2bde7a07a": "3e4df3c0ef3651c0957181efff24bb87",
".git/objects/f2/f20af633ec1a15546e413c2f64cd5bf0ce1af4": "50b322cbe8bcd27bf7fb239a8bdac214",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/84c70be2b9714f14476e5e777f22704053addb": "9a8e6d729909be11768b95a23decc543",
".git/objects/f8/be2738d01d5105fc764f5994b11a6af5526409": "a5bdcc0cc9022003357f23b72a21bd2a",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/gh-pages": "15513d2067f731c30c6ec3afc8ecb9e8",
".git/refs/remotes/origin/gh-pages": "15513d2067f731c30c6ec3afc8ecb9e8",
"assets/AssetManifest.bin": "8f75cb39ad06cacc3f13befa0ede9ab7",
"assets/AssetManifest.bin.json": "6ae463e53c08e85df6d4fdd97f49336d",
"assets/assets/books/book1.png": "c0c7e5b8db810bd2ceb558c931f9e942",
"assets/assets/books/book2.png": "8d2874b413c2be31990d68ea44887efb",
"assets/assets/books/book3.png": "bfb86762ecb5fa2db836523803e95bc6",
"assets/assets/books/book4.png": "f6743426feadac52d2fe4f1c2d023819",
"assets/assets/books/book5.png": "03df951490b12688b35d24c9dfcdb46f",
"assets/assets/books/book6.png": "0368ddeac416cd829f7e6b13f9a699cf",
"assets/assets/books/book7.png": "719832411e7044a7137688a1a567ab96",
"assets/assets/books/book8.png": "1c6f6ad39fe48fe393c04b96587d3807",
"assets/assets/cards/id-card.png": "47e7ab2f5af9e00469376c6752540bd7",
"assets/assets/monies/1000.png": "70ee9f1847a8ac21fa427ee05026bb66",
"assets/assets/monies/10000.png": "92c5ab1cb95886216ddbf04141555467",
"assets/assets/monies/100000.png": "3c71e17f6b0bbb6b7dcdab134ccdf3c9",
"assets/assets/monies/2000.png": "2e401efef4f8ae0c7a691939d39ef97b",
"assets/assets/monies/20000.png": "26a12a8139068a779423e4ad1fa90097",
"assets/assets/monies/5000.png": "0569eefc8d16c7b3ee5210c0c54c16db",
"assets/assets/monies/50000.png": "ed96cbe647e262f9e916726be922bf1f",
"assets/assets/monies/75000.png": "3cbdd61c92bed6304e5daa6636dedbf3",
"assets/assets/others/qr.png": "f1e4f97f7347eee8450a1f032e85db05",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "246adbfd92b53d89b81bcfe240ef32b6",
"assets/NOTICES": "d336148c3f246c72e12dcc64b409f889",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "dea4e131648a870b38b65918a9c63c67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1f7fb2fcfdda0a50e356d1e03eefdde7",
"/": "1f7fb2fcfdda0a50e356d1e03eefdde7",
"main.dart.js": "eeb44fb489a666f66a654dbbf585a63c",
"manifest.json": "ac2b53bd798456b50f2dad95f606a1f1",
"version.json": "c47a318663eb763132069a7abed1ea30"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
