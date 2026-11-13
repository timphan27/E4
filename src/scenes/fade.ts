import Phaser from "phaser";

const fadingScenes = new WeakSet<Phaser.Scene>();

export function fadeTo(
  scene: Phaser.Scene,
  target: string,
  data?: object,
): void {
  if (fadingScenes.has(scene)) return;

  fadingScenes.add(scene);

  scene.cameras.main.fadeOut(450, 4, 2, 12);
  scene.cameras.main.once("camerafadeoutcomplete", () => {
    fadingScenes.delete(scene);
    scene.scene.start(target, data);
  });
}

export function fadeIn(
  scene: Phaser.Scene,
  duration = 400,
): void {
  scene.cameras.main.fadeIn(duration, 4, 2, 12);
}
