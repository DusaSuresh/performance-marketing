import navigation from '../data/navigation.json'
import footer from '../data/footer.json'
import type { SiteData } from '../types'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
export function SiteLayout({ data, children }: { data: SiteData; children: React.ReactNode }) { return <><Navbar brand={data.brand} menu={navigation.menu} cta={navigation.cta}/><main>{children}</main><Footer brand={data.brand} {...footer}/></> }
