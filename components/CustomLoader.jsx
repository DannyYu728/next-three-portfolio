import { useProgress, Html, Loader } from '@react-three/drei'
import { useEffect, useState } from 'react'

export const CustomLoader = () => {
  const { progress, loaded, total } = useProgress()
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    if (loaded === total) {
      setTimeout(() => {
        setShowLoader(false)
      }, 500)
    }
  }, [loaded, total])

  return showLoader ? (
    <Html center>
      <Loader />
      <span>{Math.round(progress)}% loaded</span>
    </Html>
  ) : null
}
