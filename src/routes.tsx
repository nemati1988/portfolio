import { createBrowserRouter } from 'react-router'
import Root from '@/Root'
import Home from '@/pages/Home'
import CaseStudy from '@/pages/CaseStudy'
import DigiCarePro from '@/pages/DigiCarePro'
import MyBabylon from '@/pages/MyBabylon'
import Swiftmaids from '@/pages/Swiftmaids'
import TousDesignSystem from '@/pages/TousDesignSystem'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'work/me-time', Component: CaseStudy },
      { path: 'work/digicaRepro', Component: DigiCarePro },
      { path: 'work/my-babylon', Component: MyBabylon },
      { path: 'work/swiftmaids', Component: Swiftmaids },
      { path: 'work/tous-design-system', Component: TousDesignSystem },
      { path: '*', Component: Home },
    ],
  },
])
