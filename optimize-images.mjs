import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

async function optimizeImages(dir) {
  const files = fs.readdirSync(dir)

  for (const file of files) {
    const fullPath = path.join(dir, file)
    
    if (fs.statSync(fullPath).isDirectory()) {
      await optimizeImages(fullPath)
    } else {
      const ext = path.extname(fullPath).toLowerCase()
      
      // Only process heavy images
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const stats = fs.statSync(fullPath)
        // If larger than 300KB
        if (stats.size > 300 * 1024) {
          console.log(`Optimizing ${fullPath} (${(stats.size / 1024 / 1024).toFixed(2)} MB)...`)
          
          const tmpPath = `${fullPath}.tmp`
          try {
            let s = sharp(fullPath).resize({ width: 1920, withoutEnlargement: true })
            
            if (ext === '.jpg' || ext === '.jpeg') {
              s = s.jpeg({ quality: 75, progressive: true })
            } else if (ext === '.png') {
              s = s.png({ quality: 75, compressionLevel: 9 })
            }
            
            await s.toFile(tmpPath)
            
            // Overwrite original
            fs.renameSync(tmpPath, fullPath)
            
            const newStats = fs.statSync(fullPath)
            console.log(` -> Reduced to ${(newStats.size / 1024).toFixed(2)} KB`)
          } catch (e) {
            console.error(`Failed to optimize ${fullPath}`, e)
            if (fs.existsSync(tmpPath)) fs.unlinkSync(tmpPath)
          }
        }
      }
    }
  }
}

optimizeImages('./public/images').then(() => console.log('Done optimizing!'))