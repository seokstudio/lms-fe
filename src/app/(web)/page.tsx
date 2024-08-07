import { NextPage } from 'next'
import { notFound } from 'next/navigation'

import { layoutApi } from '@/app/api'
import { gamesApi } from '@/app/api/games.api'
import { pagesApi } from '@/app/api/pages.api'
import { HomeComponent } from '@/app/modules/home'

// get data for home page
const getHomePage = async (pageSlug: string) => {
  return await pagesApi(pageSlug)
}

// get full game list
const getGames = async () => {
  return await gamesApi()
}

// get categories
const getLayout = async () => {
  return await layoutApi()
}

// revalidate
export const revalidate = 0

// page
const Page: NextPage = async () => {
  const [sections, games, layoutInfo] = await Promise.all([
    getHomePage('main'),
    getGames(),
    getLayout(),
  ])

  if (!sections && !games && !layoutInfo) {
    notFound()
  }

  // return
  return <HomeComponent sections={sections} games={games} layoutInfo={layoutInfo} />
}

export default Page
