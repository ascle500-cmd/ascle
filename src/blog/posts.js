// Master registry. Every file in ./posts is imported here.
// To add a new blog post: create a new file inside ./posts and add one line below.

import howToVerify from "./posts/how-to-verify-authentic-tadalafil-sildenafil";
import safeImportUK from "./posts/safe-import-rules-uk-mhra-2025";
import diabetesUSA from "./posts/diabetes-shortages-usa-semaglutide-metformin";
import tgaAustralia from "./posts/tga-personal-import-rules-australia";
import vidalistaVsCenforce from "./posts/vidalista-vs-cenforce-comparison";
import statinTherapy from "./posts/statin-therapy-atorvastatin-vs-rosuvastatin";

export const blogPosts = [
  howToVerify,
  safeImportUK,
  diabetesUSA,
  tgaAustralia,
  vidalistaVsCenforce,
  statinTherapy,
].sort((a, b) => new Date(b.date) - new Date(a.date)); // newest first

export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);
