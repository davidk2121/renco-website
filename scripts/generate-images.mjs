import Replicate from "replicate";
import fs from "fs";
import path from "path";
import https from "https";
import http from "http";

const replicate = new Replicate({ auth: process.env.REPLICATE_API_TOKEN });

const SUFFIX = `Photorealistic interior real-estate photography, shot on a full-frame DSLR, 24mm wide lens, eye-level, natural window daylight, soft realistic shadows, true-to-life materials and reflections, high dynamic range, magazine listing quality, Pacific Northwest home. Ultra-high resolution. No text, no watermark, no people.`;

const images = [
  {
    file: "public/story/before-1.jpg",
    prompt: `A dated, tired 1990s suburban bathroom in need of remodeling. Beige square tile, oak vanity with brass fixtures, cultured-marble countertop, fluorescent light bar, builder-grade mirror, worn vinyl floor, dull lighting, a small window on the right wall. Lived-in and outdated but clean. ${SUFFIX}`,
  },
  {
    file: "public/story/during-1.jpg",
    prompt: `The same bathroom mid-renovation: old tile and vanity demolished, exposed wall studs and subfloor, blue painter tape and plastic sheeting, a work light, fine construction dust in the air, tools and materials staged neatly. Same camera angle, same small window on the right wall. Active job site, craftsmanship in progress. ${SUFFIX}`,
  },
  {
    file: "public/story/after-1.jpg",
    prompt: `A bathroom fully remodeled into a serene spa-like retreat: large-format porcelain tile, a warm walnut floating vanity with matte-black fixtures, quartz countertop, frameless glass walk-in shower with a niche, brushed-gold accents, warm layered lighting, a small window on the right wall dressed cleanly. Bright, luxurious, magazine-perfect. ${SUFFIX}`,
  },
  {
    file: "public/story/during-plan-1.jpg",
    prompt: `Interior designer and contractor reviewing material samples and blueprints on a kitchen island in a Pacific Northwest home. Tile swatches, cabinet door samples, and rolled plans spread out. Warm ambient lighting, modern home setting. Professional consultation mood. ${SUFFIX}`,
  },
  {
    file: "public/showcase/ba-bathroom-1-before.jpg",
    prompt: `Cramped, outdated guest bathroom. Pink and beige wall tile, dated drop-in tub with sliding glass doors, small pedestal sink, brass towel bars, single bulb fixture, worn linoleum. Centered camera, vanity on the left, window straight ahead. ${SUFFIX}`,
  },
  {
    file: "public/showcase/ba-bathroom-1-after.jpg",
    prompt: `Same guest bathroom remodeled: floor-to-ceiling marble-look porcelain, freestanding soaking tub, floating double vanity with matte-black faucets, brushed-gold sconces, warm recessed lighting. Centered camera, vanity on the left, window straight ahead. ${SUFFIX}`,
  },
  {
    file: "public/showcase/ba-bathroom-2-before.jpg",
    prompt: `Dark, dated master bathroom. Honey-oak cabinets, dated granite, cultured-marble shower surround, builder mirror spanning the wall, beige tile floor. Camera facing the double vanity, shower on the right. ${SUFFIX}`,
  },
  {
    file: "public/showcase/ba-bathroom-2-after.jpg",
    prompt: `Same master bathroom remodeled into a modern PNW spa: warm wood double vanity, white quartz, large walk-in glass shower with vertical stacked tile, black-framed mirrors, linear LED lighting. Camera facing the double vanity, shower on the right. ${SUFFIX}`,
  },
  {
    file: "public/showcase/ba-kitchen-1-before.jpg",
    prompt: `Dated 1990s kitchen. Oak cabinets, laminate counters, white appliances, beige tile backsplash, fluorescent box light, vinyl floor. Camera facing the sink wall, island in foreground. ${SUFFIX}`,
  },
  {
    file: "public/showcase/ba-kitchen-1-after.jpg",
    prompt: `Same kitchen remodeled: shaker cabinets in warm sage, waterfall quartz island, matte-black hardware, full-height marble backsplash, brushed-gold pendant lights, wide-plank oak floor. Camera facing the sink wall, island in foreground. ${SUFFIX}`,
  },
  {
    file: "public/showcase/ba-fullhome-1-before.jpg",
    prompt: `Dated, closed-off living and dining area. Popcorn ceiling, beige carpet, dark trim, small punched windows, dated fixtures. Camera from the entry looking toward the back windows. ${SUFFIX}`,
  },
  {
    file: "public/showcase/ba-fullhome-1-after.jpg",
    prompt: `Same living and dining area after a full renovation: open-concept, wide-plank oak floors, white oak built-ins, large picture windows with PNW forest view, warm modern lighting, clean trim. Camera from the entry looking toward the back windows. ${SUFFIX}`,
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const getter = url.startsWith("https") ? https : http;
    getter.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (err) => {
      fs.unlinkSync(dest);
      reject(err);
    });
  });
}

async function generateImage(item, index) {
  console.log(`\n[${index + 1}/${images.length}] Generating: ${item.file}`);
  const dir = path.dirname(item.file);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  try {
    const output = await replicate.run("black-forest-labs/flux-2-pro", {
      input: {
        prompt: item.prompt,
        aspect_ratio: "3:2",
        output_format: "jpeg",
        output_quality: 90,
        safety_tolerance: 5,
      },
    });

    const url = Array.isArray(output) ? output[0] : output;
    if (!url) throw new Error("No output URL");

    await download(url.toString(), item.file);
    console.log(`  ✓ Saved: ${item.file}`);
  } catch (err) {
    console.error(`  ✗ Failed: ${item.file} — ${err.message}`);
  }
}

// Run sequentially to avoid rate limits
for (let i = 0; i < images.length; i++) {
  await generateImage(images[i], i);
}
console.log("\n✓ All images generated.");
