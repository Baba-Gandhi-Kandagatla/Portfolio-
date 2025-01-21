'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ImageModalProps {
  images: string[] | null
  onClose: () => void
}

export default function ImageModal({ images, onClose }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setIsOpen(!!images && images.length > 0)
    setCurrentIndex(0)
  }, [images])

  const handleClose = () => {
    setIsOpen(false)
    onClose()
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : (images?.length || 1) - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < (images?.length || 1) - 1 ? prevIndex + 1 : 0))
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[800px] p-0">
        <div className="relative">
          {images && images.length > 0 && (
            <>
              <Image
                src={images[currentIndex]}
                alt={`Project preview ${currentIndex + 1}`}
                layout="responsive"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
                {currentIndex + 1} / {images.length}
              </div>
            </>
          )}
          <Button
            className="absolute top-2 right-2"
            size="icon"
            variant="secondary"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
          {images && images.length > 1 && (
            <>
              <Button
                className="absolute top-1/2 left-2 transform -translate-y-1/2"
                size="icon"
                variant="secondary"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                className="absolute top-1/2 right-2 transform -translate-y-1/2"
                size="icon"
                variant="secondary"
                onClick={handleNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

