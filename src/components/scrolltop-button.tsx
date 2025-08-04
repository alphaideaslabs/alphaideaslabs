// 'use client'

// import { Button } from '@/components/ui/button'
// import { AnimatePresence, motion } from 'framer-motion'
// import { ArrowUp } from 'lucide-react'
// import { useEffect, useState } from 'react'

// export function ScrollToTopButton() {
//   const [isVisible, setIsVisible] = useState(false)

//   // Show button when page is scrolled down
//   const toggleVisibility = () => {
//     if (window.scrollY > 300) {
//       // Muncul setelah scroll 300px
//       setIsVisible(true)
//     } else {
//       setIsVisible(false)
//     }
//   }

//   // Scroll to top smoothly
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     })
//   }

//   useEffect(() => {
//     window.addEventListener('scroll', toggleVisibility)
//     return () => {
//       window.removeEventListener('scroll', toggleVisibility)
//     }
//   }, [])

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: 50 }}
//           transition={{ duration: 0.3 }}
//           className="fixed bottom-10 right-10 z-40"
//         >
//           <Button
//             onClick={scrollToTop}
//             className="h-14 w-14 rounded-full border bg-background/70 text-foreground shadow-md backdrop-blur transition-all duration-300 hover:bg-background/80 dark:border-[#101820]/70"
//             aria-label="Scroll to top"
//           >
//             <ArrowUp className="" />
//           </Button>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   )
// }

'use client'

import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-40 md:bottom-8 md:right-8 lg:bottom-9 lg:right-9"
        >
          <Button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`h-10 w-10 rounded-full border bg-background/70 text-foreground shadow-md backdrop-blur transition-all duration-300 hover:bg-background/80 dark:border-[#101820]/70 md:h-11 md:w-11 lg:h-12 lg:w-12`}
          >
            <ArrowUp className="h-5 w-5 md:h-6 md:w-6 lg:h-6 lg:w-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
