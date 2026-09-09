const CACHE='moma-solitaire-v1.0.4';
const ASSETS=["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./ancient-tomb.jpg", "./city-of-brass.jpg", "./tolarian-academy.jpg", "./tundra.jpg", "./volcanic-island.jpg", "./lotus-petal.jpg", "./mana-vault.jpg", "./mox-diamond.jpg", "./scroll-rack.jpg", "./voltaic-key.jpg", "./mind-over-matter.jpg", "./abeyance.jpg", "./intuition.jpg", "./power-sink.jpg", "./stroke-of-genius.jpg", "./time-spiral.jpg", "./windfall.jpg", "./card-back.jpg"];
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
