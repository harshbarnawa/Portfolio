import { existsSync, mkdirSync, readdirSync, statSync } from "node:fs"
import { spawnSync } from "node:child_process"
import { join } from "node:path"

const sourceDir = "src/assets"
const outputDir = "public/assets/backgrounds"
const previewDir = join(outputDir, "previews")
const files = readdirSync(sourceDir)
  .filter((file) => /^(light|dark)-.+\.png$/i.test(file))
  .sort()
const outputName = (file, format) => file.replace(".png", `-v1.${format}`)
const command = process.platform === "win32" ? "npx.cmd" : "npx"

if (!files.length) throw new Error("No theme background PNGs found")

mkdirSync(outputDir, { recursive: true })
mkdirSync(previewDir, { recursive: true })

const runSharp = (args) => {
  const result = spawnSync(command, ["--yes", "sharp-cli@1.15.0", ...args], {
    stdio: "inherit",
    shell: process.platform === "win32",
  })

  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}

const fullOutputsExist = files.every((file) =>
  existsSync(join(outputDir, outputName(file, "webp")))
)
const previewOutputsExist = files.every((file) =>
  existsSync(join(previewDir, outputName(file, "webp")))
)

if (!fullOutputsExist) {
  process.stdout.write("Generating full-size WebP backgrounds...\n")
  runSharp([
    "--input",
    ...files.map((file) => join(sourceDir, file)),
    "--output",
    `${outputDir}/{name}-v1.webp`,
    "--format",
    "webp",
    "--quality",
    "82",
  ])
}

if (!previewOutputsExist) {
  process.stdout.write("Generating tiny blurred-preview sources...\n")
  runSharp([
    "--input",
    ...files.map((file) => join(sourceDir, file)),
    "--output",
    `${previewDir}/{name}-v1.webp`,
    "--format",
    "webp",
    "--quality",
    "32",
    "resize",
    "48",
  ])
}

const sourceBytes = files.reduce((total, file) => total + statSync(join(sourceDir, file)).size, 0)
const outputBytes = files.reduce((total, file) => total + statSync(join(outputDir, outputName(file, "webp"))).size, 0)
const savedPercent = Math.round((1 - outputBytes / sourceBytes) * 100)
const formatMB = (bytes) => `${(bytes / 1024 / 1024).toFixed(1)} MB`

process.stdout.write(`Optimized ${files.length} backgrounds: ${formatMB(sourceBytes)} PNG → ${formatMB(outputBytes)} WebP (${savedPercent}% smaller).\n`)