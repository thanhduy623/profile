// src/utils/getImage.js

const images = import.meta.glob(
    '@/assets/images/**/*',
    {
        eager: true,
        import: 'default'
    }
)

export function getImage(path) {
    return images[`/src/assets/images/${path}`]
}

export default getImage