const CACHE='moma-solitaire-v1.12.1-root-cpu-images';
const ASSETS=["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./abeyance.jpg", "./ancient-tomb.jpg", "./card-back.jpg", "./city-of-brass.jpg", "./intuition.jpg", "./lotus-petal.jpg", "./mana-vault.jpg", "./mind-over-matter.jpg", "./mox-diamond.jpg", "./power-sink.jpg", "./scroll-rack.jpg", "./stroke-of-genius.jpg", "./time-spiral.jpg", "./tolarian-academy.jpg", "./tundra.jpg", "./volcanic-island.jpg", "./voltaic-key.jpg", "./windfall.jpg",
  "./bloodstained-mire.png",
  "./flooded-strand.png",
  "./island.png",
  "./marsh-flats.png",
  "./misty-rainforest.png",
  "./polluted-delta.png",
  "./scalding-tarn.png",
  "./swamp.png",
  "./undercity-sewers.png",
  "./underground-sea.png",
  "./wasteland.png",
  "./moonshadow.png",
  "./nethergoyf.png",
  "./orcish-bowmasters.png",
  "./brainstorm.png",
  "./daze.png",
  "./fatal-push.png",
  "./flow-state.png",
  "./force-of-will.png",
  "./ponder.png",
  "./snuff-out.png",
  "./thoughtseize.png",
  "./kaito-bane-of-nightmares.png",
  "./mishra-s-bauble.png"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.origin!==self.location.origin)return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp;})));});
