/**
 * videos.ts — background video registry.
 * ---------------------------------------------------------------------------
 * Each entry pairs a video `src` with a guaranteed `poster` image. The
 * <VideoBackground> component always paints the poster first, then plays the
 * video on top on capable desktops — so if a URL is blocked, slow or the
 * device is mobile, the section still looks complete.
 *
 * SWAP FREELY: replace `src` with your own royalty-free clip (Pexels, Coverr,
 * Mixkit) or a local file dropped in `public/videos/…`. Keep clips short,
 * muted-friendly, ~1080p and a few MB. Posters stay from the image registry.
 * ---------------------------------------------------------------------------
 */
import { buildImage, images } from './images';

export interface VideoAsset {
  src: string;
  poster: string;
}

export const videos: Record<string, VideoAsset> = {
  heroRoad: {
    // Cinematic driving clip. Replace with your own if this is unavailable.
    src: 'https://videos.pexels.com/video-files/3066463/3066463-hd_1920_1080_24fps.mp4',
    poster: buildImage(images.hero.sedanRoad, { w: 1920, h: 1280, q: 70, eager: true }),
  },
  cityNight: {
    src: 'https://videos.pexels.com/video-files/2103099/2103099-hd_1920_1080_30fps.mp4',
    poster: buildImage(images.company.nightRoad, { w: 1800, h: 1000, q: 65 }),
  },
} as const;

export default videos;
