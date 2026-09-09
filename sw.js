const CACHE='moma-solitaire-v1.0.1';
const ASSETS=["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./assets/cards/ancient-tomb.jpg", "./assets/cards/city-of-brass.jpg", "./assets/cards/tolarian-academy.jpg", "./assets/cards/tundra.jpg", "./assets/cards/volcanic-island.jpg", "./assets/cards/lotus-petal.jpg", "./assets/cards/mana-vault.jpg", "./assets/cards/mox-diamond.jpg", "./assets/cards/scroll-rack.jpg", "./assets/cards/voltaic-key.jpg", "./assets/cards/mind-over-matter.jpg", "./assets/cards/abeyance.jpg", "./assets/cards/intuition.jpg", "./assets/cards/power-sink.jpg", "./assets/cards/stroke-of-genius.jpg", "./assets/cards/time-spiral.jpg", "./assets/cards/windfall.jpg", "./assets/cards/card-back.jpg"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(
  caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{
    const copy=resp.clone();
    caches.open(CACHE).then(c=>c.put(e.request,copy));
    return resp;
  })));
});
