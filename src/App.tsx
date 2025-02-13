import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Heading1, Heading2, InlineCode, Paragraph } from '@/components/ui/typography'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { UnorderedList } from '@/components/ui/list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className='flex flex-col items-center justify-center min-h-screen text-center gap-4'>
        <ModeToggle />
        <div className='flex space-x-4'>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <Avatar className='h-50 w-50'>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Heading1>.fullName</Heading1>
        <Paragraph>.titles</Paragraph>

        <Heading2>.aboutMe</Heading2>
        <Paragraph>
          I&apos;m a full-stack developer with a passion for building beautiful and functional web applications.
        </Paragraph>
        <Heading2>.workExperience</Heading2>
        <Card>
          <div className='flex items-center justify-center pl-6'>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardHeader>
              <CardTitle>.experienceTitle</CardTitle>
              <Paragraph>.experienceDescription</Paragraph>
              <CardDescription>.experienceDuration</CardDescription>
            </CardHeader>
          </div>
        </Card>
        <Heading2>.education</Heading2>
        <Card>
          <div className='flex items-center justify-center pl-6'>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardHeader>
              <CardTitle>.educationTitle</CardTitle>
              <Paragraph>.educationDescription</Paragraph>
              <CardDescription>.educationDuration</CardDescription>
            </CardHeader>
          </div>
        </Card>
        <Heading2>.certification</Heading2>
        <Card>
          <div className='flex items-center justify-center pl-6'>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardHeader>
              <CardTitle>.certificationTitle</CardTitle>
              <Paragraph>.certificationDescription</Paragraph>
              <CardDescription>.certificationDuration</CardDescription>
            </CardHeader>
          </div>
        </Card>
        <Heading2>.skills</Heading2>
        <UnorderedList>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </UnorderedList>
        <Heading2>.recommendations</Heading2>
        <Card>
          <div className='flex items-center justify-center pl-6'>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <CardHeader>
              <CardTitle>.recommendationGiver</CardTitle>
              <CardDescription>.recommendationText</CardDescription>
            </CardHeader>
          </div>
        </Card>
        <div className="card">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <Paragraph>Edit <InlineCode>src/App.tsx</InlineCode> and save to test HMR</Paragraph>
        </div>
        <Paragraph>
          Click on the Vite and React logos to learn more
        </Paragraph>
      </div>
    </ThemeProvider>
  )
}

export default App
