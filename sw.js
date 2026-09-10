const CACHE='moma-solitaire-v1.12-cpu-real-card-images';
const ASSETS=["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./abeyance.jpg", "./ancient-tomb.jpg", "./card-back.jpg", "./city-of-brass.jpg", "./intuition.jpg", "./lotus-petal.jpg", "./mana-vault.jpg", "./mind-over-matter.jpg", "./mox-diamond.jpg", "./power-sink.jpg", "./scroll-rack.jpg", "./stroke-of-genius.jpg", "./time-spiral.jpg", "./tolarian-academy.jpg", "./tundra.jpg", "./volcanic-island.jpg", "./voltaic-key.jpg", "./windfall.jpg",
  "./cpu-cards/bloodstained-mire.png",
  "./cpu-cards/flooded-strand.png",
  "./cpu-cards/island.png",
  "./cpu-cards/marsh-flats.png",
  "./cpu-cards/misty-rainforest.png",
  "./cpu-cards/polluted-delta.png",
  "./cpu-cards/scalding-tarn.png",
  "./cpu-cards/swamp.png",
  "./cpu-cards/undercity-sewers.png",
  "./cpu-cards/underground-sea.png",
  "./cpu-cards/wasteland.png",
  "./cpu-cards/moonshadow.png",
  "./cpu-cards/nethergoyf.png",
  "./cpu-cards/orcish-bowmasters.png",
  "./cpu-cards/brainstorm.png",
  "./cpu-cards/daze.png",
  "./cpu-cards/fatal-push.png",
  "./cpu-cards/flow-state.png",
  "./cpu-cards/force-of-will.png",
  "./cpu-cards/ponder.png",
  "./cpu-cards/snuff-out.png",
  "./cpu-cards/thoughtseize.png",
  "./cpu-cards/kaito-bane-of-nightmares.png",
  "./cpu-cards/mishra-s-bauble.png"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.origin!==self.location.origin)return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp;})));});
