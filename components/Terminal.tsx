'use client'

import { useState, useRef, useEffect, forwardRef } from 'react'
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

const commands = {
  help: "Available commands: help, about, skills, education, contact",
  about: "I am a B.Tech student specializing in Computer Science Engineering (AI/ML), with expertise in full-stack development and AI-driven applications.",
  skills: "Programming: C, C++, Java, Python, JavaScript, Dart\nWeb Development: MERN Stack, Flask, FastAPI\nData Science & Machine Learning: Decision Trees, Random Forest, KNN, SVM, MLP, CNN, EfficientNet, U-Net, ResNet, YOLO, R-CNN, InceptionNet",
  education: "Keshav Memorial Institute of Technology | B.Tech in Computer Science Engineering (AI/ML) | 2022–2026 (Expected) | CGPA: 8.4/10.0",
  contact: "Email: babagandhikandagatla@gmail.com\nMobile: +91 8309103893\nGithub: https://github.com/Baba-Gandhi-Kandagatla",
}

const Terminal = forwardRef<HTMLElement>((props, ref) => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState<string[]>(['Welcome to my portfolio! Type "help" for available commands.'])
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = input.toLowerCase().trim()
      let response = `Unknown command: ${command}. Type "help" for available commands.`

      if (command in commands) {
        response = commands[command as keyof typeof commands]
      }

      setOutput([...output, `$ ${input}`, response])
      setInput('')
    }
  }

  useEffect(() => {
    scrollToBottom()
    inputRef.current?.focus()
  }, [output])

  return (
    <section ref={ref} id="terminal" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Interactive Terminal</h2>
      <div className="bg-gray-900 text-green-500 p-6 rounded-lg font-mono shadow-lg">
        <ScrollArea className="h-64 mb-4" ref={scrollAreaRef}>
          {output.map((line, index) => (
            <div key={index} className="mb-1">
              {line.startsWith('$') ? (
                <span className="text-blue-400">{line}</span>
              ) : (
                <span>{line}</span>
              )}
            </div>
          ))}
        </ScrollArea>
        <div className="flex items-center">
          <span className="mr-2 text-blue-400">$</span>
          <Input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            onFocus={scrollToBottom}
            autoFocus
            className="bg-transparent border-none text-green-500 focus:outline-none flex-grow"
            placeholder="Type a command..."
          />
        </div>
      </div>
    </section>
  )
})

Terminal.displayName = 'Terminal'

export default Terminal

