import useSound from 'use-sound';

export function useNinja() {
  
  const [hawa] = useSound(
    '/hawa.wav',
    { volume: 1 }
  )

  const [watah] = useSound(
    '/watah.wav',
    { volume: 1 }
  )

  const [ninja] = useSound(
    '/ninja.wav',
    { volume: 1 }
  )

  return {ninja, watah, hawa}
}