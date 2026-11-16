import { existsSync, mkdirSync, readdirSync } from "node:fs"
import { spawnSync } from "node:child_process"
import { join } from "node:path"

const sourceDir = "src/assets"
const outputDir = "public/assets/backgrounds"
const files = readdirSync(sourceDir)
  .filter((file) => /^(light|dark)-.+\.png$/i.test(file))
  .sort()

if (!files.length) throw new Error("No theme background PNGs found")

mkdirSync(outputDir, { recursive: true })

const formats = [
  { format: "webp", quality: 82 },
]

const outputsExist = formats.every(({ format }) =>
  files.every((file) => existsSync(join(outputDir, file.replace(/\.png$/i, `.${format}`))))
)

if (outputsExist) {
  process.stdout.write("Optimized theme backgrounds already exist.\n")
  process.exit(0)
}

const command = process.platform === "win32" ? "npx.cmd" : "npx"

for (const { format, quality } of formats) {
  process.stdout.write(`Generating ${format.toUpperCase()} backgrounds...\n`)

  const result = spawnSync(
    command,
    [
      "--yes",
      "sharp-cli@1.15.0",
      "--input",
      ...files.map((file) => join(sourceDir, file)),
      "--output",
      `${outputDir}/{name}.${format}`,
      "--format",
      format,
      "--quality",
      String(quality),
    ],
    { stdio: "inherit", shell: process.platform === "win32" }
  )

  if (result.error) throw result.error
  if (result.status !== 0) process.exit(result.status ?? 1)
}

process.stdout.write(`Optimized ${files.length} theme backgrounds into AVIF and WebP.\n`)